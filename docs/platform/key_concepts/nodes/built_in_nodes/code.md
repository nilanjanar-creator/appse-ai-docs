---
slug: /platform/key-concepts/nodes/built-in/code
title: Code Node
---

The **Code Node** allows you to run custom code to transform data, perform complex logic, or aggregate information that standard nodes can't handle. It provides a secure, sandboxed environment for data manipulation.

This might be helpful in situations such as:
*   Transforming JSON structures (e.g., renaming fields, restructuring objects)
*   Filtering items based on complex conditions
*   Aggregating data (e.g., summing up order totals)
*   Merging data from multiple previous nodes

## Configuration

<img src="\img\platform\key-concepts\nodes\built-in\code\configuration.png" alt="Code Node Configuration" width="700"/>

### Modes of Execution


The Code Node operates in two modes, which determine how input data is processed:

1.  **Run Once for All Items** (Default):
    *   **Input**: Receives an **Array** of all items from the previous node.
    *   **Output**: Must return an **Array** of object.
    *   **Ideal for**: Aggregation, sorting, filtering, or merging data.
    
    ```javascript
    // Input ($payload): [
    //  { "product": "A", "price": 10 },
    //  { "product": "B", "price": 25 },
    //  { "product": "C", "price": 5 }
    // ]

    // Filter items over $15 and sort by price descending
    const filtered = $payload
      .filter(item => item.price > 5)
      .sort((a, b) => b.price - a.price);

    return [{ result: filtered }];
    // Output: [
    //  { "result": [
    //      { "product": "B", "price": 25 }, 
    //      { "product": "A", "price": 10 }
    //    ] 
    //  }
    // ]
    ```

2.  **Run Once for Each Item**:
    *   **Input**: Receives a **Single Object** for each item. The code runs multiple times (once per item).
    *   **Output**: Must return a **Single Object**.
    *   **Ideal for**: Mapping fields, formatting values, or adding new properties to each item independently.

    ```javascript
    // Input ($payload): { 
    // "firstName": "John", 
    // "lastName": "Doe", 
    // "price": 100 
    // }

    const taxRate = 0.18;
    return {
      fullName: `${$payload.firstName} ${$payload.lastName}`,
      originalPrice: $payload.price,
      finalPrice: parseFloat(($payload.price * (1 + taxRate)).toFixed(2))
    };
    // Output: { 
    // "fullName": "John Doe", 
    // "originalPrice": 100, 
    // "finalPrice": 118 
    // }
    ```

### Language


Currently, the Code Node supports **JavaScript** only. You can write standard ES6+ JavaScript to manipulate your data.

### Code


This is where you write your custom code for data transformation. 

*   The code must return a valid JSON output (Array or Object depending on the [mode](#modes-of-execution)).

## Code Editor Features

The built-in code editor provides several tools to help you write and debug your logic:

*   **Autocomplete**: Type `$` to see suggestions for `$payload`, previous nodes (e.g., `$('Get Users')`), or start typing a variable name or method name to see suggestions for standard JavaScript methods. Suggestions from previous nodes are available once those nodes have been executed. Use `Ctrl` + `Space` for toggling the suggestion tooltip on or off.
*   **Real-time Linting**: Flags errors immediately, such as syntax issues or attempts to modify read-only data. Warnings will appear if data from previous nodes is not available — this typically means those nodes have not been executed yet.
*   **Console Output**: Use `console.log()` to print messages to your browser's developer console for debugging.
*   **Syntax Highlighting**: Colors your code for better readability.

## Accessing Data

<img src="\img\platform\key-concepts\nodes\built-in\code\autocomplete.png" alt="Code Node Autocomplete" width="700"/>

### `$payload`

<img src="\img\platform\key-concepts\nodes\built-in\code\immediate-parent.png" alt="Code Node Payload" width="700"/>

This is the main variable containing your input data.

*   **In "Run Once for All Items" mode**:
    `$payload` is an **Array** containing **all items** returned by the previous node. You have access to the entire dataset at once.
    *   *Example:* `[ { "id": 1, "name": "Ali" }, { "id": 2, "name": "Bob" } ]`

*   **In "Run Once for Each Item" mode**:
    `$payload` is a **Single Object** representing **one item** from the list. The code runs individually for each item in the dataset.
    *   *Example:* `{ "id": 1, "name": "Ali" }` (First execution) -> `{ "id": 2, "name": "Bob" }` (Second execution)

### `$('Node Name')`

<img src="\img\platform\key-concepts\nodes\built-in\code\descendants.png" alt="Code Node Previous Node" width="700"/>

Access output from any previous node by name. In the figure above, **Shopify** is the node name.

*   **Syntax**: `$('Node Name').payload`
*   The `$('Node Name')` function returns a wrapper object. You usually need to access the `.payload` property to get the actual data array.

**Example:**
```javascript
// Access data from a previous "Get Users" node
const users = $('Get Users').payload;
const matchingUser = users.find(u => u.id === $payload.userId);
```

| Library | Usage | Example |
| :--- | :--- | :--- |
| **moment** | Date & Time manipulation | `moment().add(7, 'days').format('YYYY-MM-DD')` |
| **crypto** | Cryptographic functions | `crypto.randomUUID()` |
| **Math** | Mathematical operations | `Math.round(10.5)` | 
| **JSON** | Parsing and stringifying JSON | `JSON.parse('{"a":1}')` |

## Steps to Use the Code Node

1.  Select the **Code Node** from the node selection screen.
<img src="\img\platform\key-concepts\nodes\built-in\code\selection.png" alt="Code Node Selection" width="700"/>

---

2.  Connect it to a node that provides data (e.g., an HTTP Request Node or App Node).
<img src="\img\platform\key-concepts\nodes\built-in\code\connection.png" alt="Code Node Connection" width="700"/>

---

3.  Open the **Configuration** tab and select your **Mode** (Run Once or Run Each).

---

4.  Write your JavaScript logic in the **Code** section. Utilize `$payload` to access input data.
<img src="\img\platform\key-concepts\nodes\built-in\code\js-code.png" alt="Code Node JS Code" width="700"/>

---

5.  Use `console.log()` to debug if needed.

---

6.  Click **Run** to test your code and see the output.

---

### Example: Calculate Total with Tax

**Scenario**: You have a list of orders and want to format the date and calculate the total price including tax.

**Mode**: Run Once for Each Item

```javascript
// Input: { "price": 100, "date": "2023-10-01" }

const taxRate = 0.2;
const total = $payload.price * (1 + taxRate);

return {
  originalPrice: $payload.price,
  finalPrice: parseFloat(total.toFixed(2)),
  processedAt: moment().toISOString(),
  status: "Processed"
};
```

## Output Behavior

*   **Success**: The Output panel will show the transformed data (Array or Object depending on mode).
*   **Errors**: If your code has syntax errors or runtime exceptions, they will be shown in the output section. You may also find additional error details in your browser's developer console.
*   **Important**: Input data is **Read-Only**. Always return a **new** object or array. Do not directly modify `$payload` or `$('Node Name').payload`.

## Supported & Restricted Features

### Supported ✅

| Category | Details |
| :--- | :--- |
| **Standard Objects** | `Math`, `Date`, `JSON`, `RegExp`, `String`, `Number`, `Boolean`, `Array`, `Object`, `Error`, `TypeError` |
| **Collections** | `Map`, `Set` |
| **Utilities** | `structuredClone()`, `atob()`, `btoa()`, `parseInt()`, `parseFloat()`, `isNaN()`, `isFinite()` |
| **URI Encoding** | `encodeURIComponent()`, `decodeURIComponent()`, `encodeURI()`, `decodeURI()` |
| **Console** | `console.log()`, `console.warn()`, `console.error()`, `console.info()`, `console.debug()`, `console.table()` |
| **Libraries** | `moment` (date/time manipulation), `crypto` (`randomUUID()`, `getRandomValues()`) |
| **Syntax** | ES6+ features: arrow functions, destructuring, spread operator, template literals, optional chaining (`?.`), nullish coalescing (`??`), `for...of` loops |

### Not Supported / Restricted ❌

| Category | Details | Alternative |
| :--- | :--- | :--- |
| **Network Requests** | `fetch`, `XMLHttpRequest`, `http`, `https` | Use the **HTTP Request Node** |
| **Async Operations** | `async/await`, `Promise`, `setTimeout`, `setInterval` | Code runs synchronously |
| **Browser APIs** | `window`, `document`, DOM access | Not applicable |
| **File System** | `fs`, file read/write | Use dedicated nodes |
| **Modules** | `import`, `require`, `module.exports` | Use built-in libraries only |
| **Data Mutation** | Direct modification of `$payload` or node data `$('Node name').payload` | Return a new object using the spread operator (`...`) |

#### These will cause errors ❌: 
```javascript
$payload.status = "Active";          // Cannot assign to read-only property
$payload.push({ id: 3 });            // Cannot use mutating methods
delete $payload.name;                // Cannot delete properties
$('Get Users').payload[0].age = 30;  // Cannot modify referenced node data
```

#### Instead, return new objects ✅:
```javascript
// Spread into a new object
return { ...$payload, status: "Active" };

// Use non-mutating array methods
const filtered = $payload.filter(item => item.active);
const mapped = $payload.map(item => ({ ...item, seen: true }));
```
## Real Integration Use Cases

Select the appropriate tab below based on your desired **Mode** (Run Once for All Item or Run Once for Each Item) :

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="run-all" label="Run Once for All Items">

### Use Case: Daily SAP SL Order Summary

**Scenario**:  
A company using **SAP Business One** exposes Sales Order data through the **SAP Business One**.
Through **appse ai**, daily Sales Orders are fetched from **SAP Business One** in bulk (as an array payload).
Management requires a daily summarized report including:
- Total number of Sales Orders created
- Total revenue (converted to USD if required)
- Count of international orders
- Top-selling product (based on quantity sold)

Instead of exporting data to Excel and manually calculating data, the Code Node processes the **SAP Business One** payload and generates a consolidated daily report automatically.
Here ERP data is summarized before being:
- Posted to Microsoft Teams

<img src="\img\platform\key-concepts\nodes\built-in\code\orderSummaryFlow.png" alt="connect html source" width="700"/>

---

### Why Run Once for All Items?

- `$payload` is an **Array of all orders**
- The code runs **only once**
- Since aggregation is required (summing totals, counting, finding max product), we must manually loop through all records.

> Aggregation requires iterating through the entire dataset.

---

> Below is a sample **SAP Business One** bulk order payload:

<div
  style={{
    maxHeight: '350px',
    overflow: 'auto',
    border: '1px solid #ddd',
    padding: '12px',
    borderRadius: '6px'
  }}
>
<pre>
<code>
```JSON
[
  {
    "_pair_index": 0,
    "DocEntry": 16722,
    "DocNum": 2103,
    "DocType": "dDocument_Items",
    "HandWritten": "tNO",
    "Printed": "psNo",
    "DocDate": "2025-08-20",
    "DocDueDate": "2014-04-04",
    "CardCode": "1",
    "CardName": "Nysa",
    "Address": null,
    "NumAtCard": null,
    "DocTotal": 3549,
    "AttachmentEntry": null,
    "DocCurrency": "$",
    "DocRate": 1,
    "Reference1": "2103",
    "Reference2": null,
    "Comments": "",
    "JournalMemo": "Sales Orders - 1",
    "PaymentGroupCode": -1,
    "DocTime": "17:13:00",
    "SalesPersonCode": -1,
    "TransportationCode": -1,
    "Confirmed": "tYES",
    "ImportFileNum": null,
    "SummeryType": "dNoSummary",
    "ContactPersonCode": null,
    "ShowSCN": "tNO",
    "Series": 8,
    "TaxDate": "2025-08-20",
    "PartialSupply": "tYES",
    "DocObjectCode": "oOrders",
    "ShipToCode": null,
    "Indicator": null,
    "FederalTaxID": null,
    "DiscountPercent": 0,
    "PaymentReference": null,
    "CreationDate": "2025-08-20",
    "UpdateDate": "2025-08-20",
    "FinancialPeriod": 10,
    "TransNum": null,
    "VatSum": 549,
    "VatSumSys": 549,
    "VatSumFc": 0,
    "NetProcedure": "tNO",
    "DocTotalFc": 0,
    "DocTotalSys": 3549,
    "Form1099": null,
    "Box1099": null,
    "RevisionPo": "tNO",
    "RequriedDate": "2014-04-04",
    "CancelDate": "2014-05-04",
    "BlockDunning": "tNO",
    "Submitted": "tNO",
    "Segment": 0,
    "PickStatus": "tNO",
    "Pick": "tNO",
    "PaymentMethod": null,
    "PaymentBlock": "tNO",
    "PaymentBlockEntry": null,
    "CentralBankIndicator": null,
    "MaximumCashDiscount": "tNO",
    "Reserve": "tNO",
    "Project": null,
    "ExemptionValidityDateFrom": null,
    "ExemptionValidityDateTo": null,
    "WareHouseUpdateType": "dwh_CustomerOrders",
    "Rounding": "tNO",
    "ExternalCorrectedDocNum": null,
    "InternalCorrectedDocNum": null,
    "NextCorrectingDocument": null,
    "DeferredTax": "tNO",
    "TaxExemptionLetterNum": null,
    "WTApplied": 0,
    "WTAppliedFC": 0,
    "BillOfExchangeReserved": "tNO",
    "AgentCode": null,
    "WTAppliedSC": 0,
    "TotalEqualizationTax": 0,
    "TotalEqualizationTaxFC": 0,
    "TotalEqualizationTaxSC": 0,
    "NumberOfInstallments": 1,
    "ApplyTaxOnFirstInstallment": "tNO",
    "WTNonSubjectAmount": 0,
    "WTNonSubjectAmountSC": 0,
    "WTNonSubjectAmountFC": 0,
    "WTExemptedAmount": 0,
    "WTExemptedAmountSC": 0,
    "WTExemptedAmountFC": 0,
    "BaseAmount": 0,
    "BaseAmountSC": 0,
    "BaseAmountFC": 0,
    "WTAmount": 0,
    "WTAmountSC": 0,
    "WTAmountFC": 0,
    "VatDate": null,
    "DocumentsOwner": null,
    "FolioPrefixString": null,
    "FolioNumber": null,
    "DocumentSubType": "bod_None",
    "BPChannelCode": null,
    "BPChannelContact": null,
    "Address2": "",
    "DocumentStatus": "bost_Open",
    "PeriodIndicator": "Default",
    "PayToCode": null,
    "ManualNumber": null,
    "UseShpdGoodsAct": "tNO",
    "IsPayToBank": "tNO",
    "PayToBankCountry": null,
    "PayToBankCode": null,
    "PayToBankAccountNo": null,
    "PayToBankBranch": null,
    "BPL_IDAssignedToInvoice": null,
    "DownPayment": 0,
    "ReserveInvoice": "tNO",
    "LanguageCode": 3,
    "TrackingNumber": null,
    "PickRemark": null,
    "ClosingDate": null,
    "SequenceCode": null,
    "SequenceSerial": null,
    "SeriesString": null,
    "SubSeriesString": null,
    "SequenceModel": "0",
    "UseCorrectionVATGroup": "tNO",
    "TotalDiscount": 0,
    "DownPaymentAmount": 0,
    "DownPaymentPercentage": 0,
    "DownPaymentType": "dptInvoice",
    "DownPaymentAmountSC": 0,
    "DownPaymentAmountFC": 0,
    "VatPercent": 0,
    "ServiceGrossProfitPercent": 0,
    "OpeningRemarks": null,
    "ClosingRemarks": null,
    "RoundingDiffAmount": 0,
    "RoundingDiffAmountFC": 0,
    "RoundingDiffAmountSC": 0,
    "Cancelled": "tNO",
    "SignatureInputMessage": null,
    "SignatureDigest": null,
    "CertificationNumber": null,
    "PrivateKeyVersion": null,
    "ControlAccount": "_SYS00000000010",
    "InsuranceOperation347": "tNO",
    "ArchiveNonremovableSalesQuotation": "tNO",
    "GTSChecker": null,
    "GTSPayee": null,
    "ExtraMonth": 0,
    "ExtraDays": 0,
    "CashDiscountDateOffset": 0,
    "StartFrom": "pdt_None",
    "NTSApproved": "tNO",
    "ETaxWebSite": null,
    "ETaxNumber": null,
    "NTSApprovedNumber": null,
    "EDocGenerationType": "edocNotRelevant",
    "EDocSeries": null,
    "EDocNum": null,
    "EDocExportFormat": null,
    "EDocStatus": "edoc_Ok",
    "EDocErrorCode": null,
    "EDocErrorMessage": null,
    "DownPaymentStatus": "so_Open",
    "GroupSeries": null,
    "GroupNumber": null,
    "GroupHandWritten": "tNO",
    "ReopenOriginalDocument": null,
    "ReopenManuallyClosedOrCanceledDocument": null,
    "CreateOnlineQuotation": "tNO",
    "POSEquipmentNumber": null,
    "POSManufacturerSerialNumber": null,
    "POSCashierNumber": null,
    "ApplyCurrentVATRatesForDownPaymentsToDraw": "tNO",
    "ClosingOption": "coByCurrentSystemDate",
    "SpecifiedClosingDate": null,
    "OpenForLandedCosts": "tYES",
    "AuthorizationStatus": "dasWithout",
    "TotalDiscountFC": 0,
    "TotalDiscountSC": 0,
    "RelevantToGTS": "tNO",
    "BPLName": null,
    "VATRegNum": null,
    "AnnualInvoiceDeclarationReference": null,
    "Supplier": null,
    "Releaser": null,
    "Receiver": null,
    "BlanketAgreementNumber": null,
    "IsAlteration": "tNO",
    "CancelStatus": "csNo",
    "AssetValueDate": null,
    "DocumentDelivery": "ddtNoneSeleted",
    "AuthorizationCode": null,
    "StartDeliveryDate": null,
    "StartDeliveryTime": null,
    "EndDeliveryDate": null,
    "EndDeliveryTime": null,
    "VehiclePlate": null,
    "ATDocumentType": null,
    "ElecCommStatus": null,
    "ElecCommMessage": null,
    "ReuseDocumentNum": "tNO",
    "ReuseNotaFiscalNum": "tNO",
    "PrintSEPADirect": "tNO",
    "FiscalDocNum": null,
    "POSDailySummaryNo": null,
    "POSReceiptNo": null,
    "PointOfIssueCode": null,
    "Letter": null,
    "FolioNumberFrom": null,
    "FolioNumberTo": null,
    "InterimType": "boidt_None",
    "RelatedType": -1,
    "RelatedEntry": null,
    "SAPPassport": null,
    "DocumentTaxID": null,
    "DateOfReportingControlStatementVAT": null,
    "ReportingSectionControlStatementVAT": null,
    "ExcludeFromTaxReportControlStatementVAT": "tNO",
    "POS_CashRegister": null,
    "UpdateTime": "17:13:12",
    "CreateQRCodeFrom": null,
    "PriceMode": null,
    "ShipFrom": null,
    "CommissionTrade": "ct_Empty",
    "CommissionTradeReturn": "tNO",
    "UseBillToAddrToDetermineTax": "tNO",
    "Cig": null,
    "Cup": null,
    "FatherCard": null,
    "FatherType": "cPayments_sum",
    "ShipState": null,
    "ShipPlace": null,
    "CustOffice": null,
    "FCI": null,
    "U_SYNCFLAG": null,
    "U_WEBORDID": null,
    "U_NumAtCard": null,
    "U_PAYMETH": null,
    "U_TRANID": null,
    "U_Coupon": null,
    "U_DLVFLAG": null,
    "U_DeliveryId": null,
    "U_InvoiceId": null,
    "U_CreditMemoId": null,
    "U_FulfillmentId": null,
    "U_QuoteId": null,
    "Document_ApprovalRequests": [],
    "DocumentLines": [
      {
        "LineNum": 0,
        "ItemCode": "33",
        "ItemDescription": "Biker Jacket",
        "Quantity": 100,
        "ShipDate": "2014-04-04",
        "Price": 30,
        "PriceAfterVAT": 35.49,
        "Currency": "$",
        "Rate": 0,
        "DiscountPercent": 0,
        "VendorNum": null,
        "SerialNum": null,
        "WarehouseCode": "01",
        "SalesPersonCode": -1,
        "CommisionPercent": 0,
        "TreeType": "iNotATree",
        "AccountCode": "_SYS00000000081",
        "UseBaseUnits": "tNO",
        "SupplierCatNum": null,
        "CostingCode": null,
        "ProjectCode": null,
        "BarCode": null,
        "VatGroup": null,
        "Height1": 0,
        "Hight1Unit": null,
        "Height2": 0,
        "Height2Unit": null,
        "Lengh1": 0,
        "Lengh1Unit": null,
        "Lengh2": 0,
        "Lengh2Unit": null,
        "Weight1": 0,
        "Weight1Unit": null,
        "Weight2": 0,
        "Weight2Unit": null,
        "Factor1": 1,
        "Factor2": 1,
        "Factor3": 1,
        "Factor4": 1,
        "BaseType": -1,
        "BaseEntry": null,
        "BaseLine": null,
        "Volume": 0,
        "VolumeUnit": 5,
        "Width1": 0,
        "Width1Unit": null,
        "Width2": 0,
        "Width2Unit": null,
        "Address": "",
        "TaxCode": "IGSTas",
        "TaxType": "tt_Yes",
        "TaxLiable": "tYES",
        "PickStatus": "tNO",
        "PickQuantity": 0,
        "PickListIdNumber": null,
        "OriginalItem": null,
        "BackOrder": "tYES",
        "FreeText": null,
        "ShippingMethod": -1,
        "POTargetNum": null,
        "POTargetEntry": null,
        "POTargetRowNum": null,
        "CorrectionInvoiceItem": "ciis_ShouldBe",
        "CorrInvAmountToStock": 0,
        "CorrInvAmountToDiffAcct": 0,
        "AppliedTax": 0,
        "AppliedTaxFC": 0,
        "AppliedTaxSC": 0,
        "WTLiable": "tNO",
        "DeferredTax": "tNO",
        "EqualizationTaxPercent": 0,
        "TotalEqualizationTax": 0,
        "TotalEqualizationTaxFC": 0,
        "TotalEqualizationTaxSC": 0,
        "NetTaxAmount": 549,
        "NetTaxAmountFC": 0,
        "NetTaxAmountSC": 549,
        "MeasureUnit": null,
        "UnitsOfMeasurment": 1,
        "LineTotal": 3000,
        "TaxPercentagePerRow": 18.3,
        "TaxTotal": 549,
        "ConsumerSalesForecast": "tYES",
        "ExciseAmount": 0,
        "TaxPerUnit": 0,
        "TotalInclTax": 0,
        "CountryOrg": null,
        "SWW": null,
        "TransactionType": null,
        "DistributeExpense": "tYES",
        "RowTotalFC": 0,
        "RowTotalSC": 3000,
        "LastBuyInmPrice": 0,
        "LastBuyDistributeSumFc": 0,
        "LastBuyDistributeSumSc": 0,
        "LastBuyDistributeSum": 0,
        "StockDistributesumForeign": 0,
        "StockDistributesumSystem": 0,
        "StockDistributesum": 0,
        "StockInmPrice": 0,
        "PickStatusEx": "dlps_NotPicked",
        "TaxBeforeDPM": 0,
        "TaxBeforeDPMFC": 0,
        "TaxBeforeDPMSC": 0,
        "CFOPCode": null,
        "CSTCode": null,
        "Usage": null,
        "TaxOnly": "tNO",
        "VisualOrder": 0,
        "BaseOpenQuantity": 0,
        "UnitPrice": 30,
        "LineStatus": "bost_Open",
        "PackageQuantity": 100,
        "Text": null,
        "LineType": "dlt_Regular",
        "COGSCostingCode": null,
        "COGSAccountCode": "_SYS00000000088",
        "ChangeAssemlyBoMWarehouse": "N",
        "GrossBuyPrice": 102,
        "GrossBase": -5,
        "GrossProfitTotalBasePrice": 10200,
        "CostingCode2": null,
        "CostingCode3": null,
        "CostingCode4": null,
        "CostingCode5": null,
        "ItemDetails": null,
        "LocationCode": null,
        "ActualDeliveryDate": null,
        "RemainingOpenQuantity": 100,
        "OpenAmount": 3000,
        "OpenAmountFC": 0,
        "OpenAmountSC": 3000,
        "ExLineNo": null,
        "RequiredDate": null,
        "RequiredQuantity": 0,
        "COGSCostingCode2": null,
        "COGSCostingCode3": null,
        "COGSCostingCode4": null,
        "COGSCostingCode5": null,
        "CSTforIPI": null,
        "CSTforPIS": null,
        "CSTforCOFINS": null,
        "CreditOriginCode": null,
        "WithoutInventoryMovement": "tNO",
        "AgreementNo": null,
        "AgreementRowNumber": null,
        "ActualBaseEntry": null,
        "ActualBaseLine": null,
        "DocEntry": 16722,
        "Surpluses": 0,
        "DefectAndBreakup": 0,
        "Shortages": 0,
        "ConsiderQuantity": "tNO",
        "PartialRetirement": "tNO",
        "RetirementQuantity": 0,
        "RetirementAPC": 0,
        "ThirdParty": "tNO",
        "PoNum": null,
        "PoItmNum": null,
        "ExpenseType": null,
        "ReceiptNumber": null,
        "ExpenseOperationType": null,
        "FederalTaxID": null,
        "GrossProfit": -7200,
        "GrossProfitFC": 0,
        "GrossProfitSC": -7200,
        "PriceSource": "dpsManual",
        "StgSeqNum": null,
        "StgEntry": null,
        "StgDesc": null,
        "UoMEntry": -1,
        "UoMCode": "Manual",
        "InventoryQuantity": 100,
        "RemainingOpenInventoryQuantity": 100,
        "ParentLineNum": null,
        "Incoterms": 0,
        "TransportMode": 0,
        "NatureOfTransaction": null,
        "DestinationCountryForImport": null,
        "DestinationRegionForImport": null,
        "OriginCountryForExport": null,
        "OriginRegionForExport": null,
        "ItemType": "dit_Item",
        "ChangeInventoryQuantityIndependently": "tNO",
        "FreeOfChargeBP": "tNO",
        "SACEntry": null,
        "HSNEntry": null,
        "GrossPrice": 35.49,
        "GrossTotal": 3549,
        "GrossTotalFC": 0,
        "GrossTotalSC": 3549,
        "NCMCode": -1,
        "NVECode": null,
        "IndEscala": "tNO",
        "CtrSealQty": 0,
        "CNJPMan": null,
        "CESTCode": null,
        "UFFiscalBenefitCode": null,
        "ShipToCode": null,
        "ShipToDescription": "",
        "OwnerCode": null,
        "ExternalCalcTaxRate": 0,
        "ExternalCalcTaxAmount": 0,
        "ExternalCalcTaxAmountFC": 0,
        "ExternalCalcTaxAmountSC": 0,
        "StandardItemIdentification": null,
        "CommodityClassification": null,
        "UnencumberedReason": null,
        "U_WebOrderItemId": null,
        "U_CustomOption": null,
        "LineTaxJurisdictions": [
          {
            "JurisdictionCode": "assa18.3",
            "JurisdictionType": -2,
            "TaxAmount": 549,
            "TaxAmountSC": 549,
            "TaxAmountFC": 0,
            "TaxRate": 18.3,
            "DocEntry": 16722,
            "LineNumber": 0,
            "RowSequence": 0,
            "ExternalCalcTaxRate": 0,
            "ExternalCalcTaxAmount": 0,
            "ExternalCalcTaxAmountFC": 0,
            "ExternalCalcTaxAmountSC": 0
          }
        ],
        "DocumentLineAdditionalExpenses": [],
        "WithholdingTaxLines": [],
        "SerialNumbers": [],
        "BatchNumbers": [],
        "DocumentLinesBinAllocations": []
      }
    ],
    "ElectronicProtocols": [],
    "DocumentAdditionalExpenses": [],
    "WithholdingTaxDataWTXCollection": [],
    "WithholdingTaxDataCollection": [],
    "DocumentSpecialLines": [],
    "TaxExtension": {
      "TaxId0": null,
      "TaxId1": null,
      "TaxId2": null,
      "TaxId3": null,
      "TaxId4": null,
      "TaxId5": null,
      "TaxId6": null,
      "TaxId7": null,
      "TaxId8": null,
      "TaxId9": null,
      "State": null,
      "County": null,
      "Incoterms": null,
      "Vehicle": null,
      "VehicleState": null,
      "NFRef": null,
      "Carrier": null,
      "PackQuantity": null,
      "PackDescription": null,
      "Brand": null,
      "ShipUnitNo": null,
      "NetWeight": 0,
      "GrossWeight": 0,
      "StreetS": null,
      "BlockS": null,
      "BuildingS": null,
      "CityS": null,
      "ZipCodeS": null,
      "CountyS": null,
      "StateS": null,
      "CountryS": null,
      "StreetB": null,
      "BlockB": null,
      "BuildingB": null,
      "CityB": null,
      "ZipCodeB": null,
      "CountyB": null,
      "StateB": null,
      "CountryB": null,
      "ImportOrExport": null,
      "MainUsage": null,
      "GlobalLocationNumberS": null,
      "GlobalLocationNumberB": null,
      "TaxId12": null,
      "TaxId13": null,
      "BillOfEntryNo": null,
      "BillOfEntryDate": null,
      "OriginalBillOfEntryNo": null,
      "OriginalBillOfEntryDate": null,
      "ImportOrExportType": "et_IpmortsOrExports",
      "PortCode": null,
      "DocEntry": 16722,
      "BoEValue": 0,
      "ClaimRefund": null,
      "DifferentialOfTaxRate": null,
      "IsIGSTAccount": null
    },
    "AddressExtension": {
      "ShipToStreet": null,
      "ShipToStreetNo": null,
      "ShipToBlock": null,
      "ShipToBuilding": null,
      "ShipToCity": null,
      "ShipToZipCode": null,
      "ShipToCounty": null,
      "ShipToState": null,
      "ShipToCountry": null,
      "ShipToAddressType": null,
      "BillToStreet": null,
      "BillToStreetNo": null,
      "BillToBlock": null,
      "BillToBuilding": null,
      "BillToCity": null,
      "BillToZipCode": null,
      "BillToCounty": null,
      "BillToState": null,
      "BillToCountry": null,
      "BillToAddressType": null,
      "ShipToGlobalLocationNumber": null,
      "BillToGlobalLocationNumber": null,
      "ShipToAddress2": null,
      "ShipToAddress3": null,
      "BillToAddress2": null,
      "BillToAddress3": null,
      "PlaceOfSupply": null,
      "PurchasePlaceOfSupply": null,
      "DocEntry": 16722,
      "GoodsIssuePlaceBP": null,
      "GoodsIssuePlaceCNPJ": null,
      "GoodsIssuePlaceCPF": null,
      "GoodsIssuePlaceStreet": null,
      "GoodsIssuePlaceStreetNo": null,
      "GoodsIssuePlaceBuilding": null,
      "GoodsIssuePlaceZip": null,
      "GoodsIssuePlaceBlock": null,
      "GoodsIssuePlaceCity": null,
      "GoodsIssuePlaceCounty": null,
      "GoodsIssuePlaceState": null,
      "GoodsIssuePlaceCountry": null,
      "GoodsIssuePlacePhone": null,
      "GoodsIssuePlaceEMail": null,
      "GoodsIssuePlaceDepartureDate": null,
      "DeliveryPlaceBP": null,
      "DeliveryPlaceCNPJ": null,
      "DeliveryPlaceCPF": null,
      "DeliveryPlaceStreet": null,
      "DeliveryPlaceStreetNo": null,
      "DeliveryPlaceBuilding": null,
      "DeliveryPlaceZip": null,
      "DeliveryPlaceBlock": null,
      "DeliveryPlaceCity": null,
      "DeliveryPlaceCounty": null,
      "DeliveryPlaceState": null,
      "DeliveryPlaceCountry": null,
      "DeliveryPlacePhone": null,
      "DeliveryPlaceEMail": null,
      "DeliveryPlaceDepartureDate": null,
      "U_WBCUSTADDIDS": null,
      "U_WBCUSTADDIDB": null,
      "U_TelNoS": null,
      "U_TelNoB": null
    },
    "DocumentReferences": []
  },
  {
    "_pair_index": 0,
    "DocEntry": 17025,
    "DocNum": 2159,
    "DocType": "dDocument_Items",
    "HandWritten": "tNO",
    "Printed": "psNo",
    "DocDate": "2025-10-21",
    "DocDueDate": "2025-04-04",
    "CardCode": "1",
    "CardName": "Nysa",
    "Address": null,
    "NumAtCard": null,
    "DocTotal": 4147.27,
    "AttachmentEntry": null,
    "DocCurrency": "$",
    "DocRate": 1,
    "Reference1": "2159",
    "Reference2": null,
    "Comments": "",
    "JournalMemo": "Sales Orders - 1",
    "PaymentGroupCode": -1,
    "DocTime": "17:18:00",
    "SalesPersonCode": -1,
    "TransportationCode": -1,
    "Confirmed": "tYES",
    "ImportFileNum": null,
    "SummeryType": "dNoSummary",
    "ContactPersonCode": null,
    "ShowSCN": "tNO",
    "Series": 8,
    "TaxDate": "2025-10-21",
    "PartialSupply": "tYES",
    "DocObjectCode": "oOrders",
    "ShipToCode": null,
    "Indicator": null,
    "FederalTaxID": null,
    "DiscountPercent": -3.68175,
    "PaymentReference": null,
    "CreationDate": "2025-10-21",
    "UpdateDate": "2025-10-21",
    "FinancialPeriod": 10,
    "TransNum": null,
    "VatSum": 0,
    "VatSumSys": 0,
    "VatSumFc": 0,
    "NetProcedure": "tNO",
    "DocTotalFc": 0,
    "DocTotalSys": 4147.27,
    "Form1099": null,
    "Box1099": null,
    "RevisionPo": "tNO",
    "RequriedDate": "2025-04-04",
    "CancelDate": "2025-05-04",
    "BlockDunning": "tNO",
    "Submitted": "tNO",
    "Segment": 0,
    "PickStatus": "tNO",
    "Pick": "tNO",
    "PaymentMethod": null,
    "PaymentBlock": "tNO",
    "PaymentBlockEntry": null,
    "CentralBankIndicator": null,
    "MaximumCashDiscount": "tNO",
    "Reserve": "tNO",
    "Project": null,
    "ExemptionValidityDateFrom": null,
    "ExemptionValidityDateTo": null,
    "WareHouseUpdateType": "dwh_CustomerOrders",
    "Rounding": "tNO",
    "ExternalCorrectedDocNum": null,
    "InternalCorrectedDocNum": null,
    "NextCorrectingDocument": null,
    "DeferredTax": "tNO",
    "TaxExemptionLetterNum": null,
    "WTApplied": 0,
    "WTAppliedFC": 0,
    "BillOfExchangeReserved": "tNO",
    "AgentCode": null,
    "WTAppliedSC": 0,
    "TotalEqualizationTax": 0,
    "TotalEqualizationTaxFC": 0,
    "TotalEqualizationTaxSC": 0,
    "NumberOfInstallments": 1,
    "ApplyTaxOnFirstInstallment": "tNO",
    "WTNonSubjectAmount": 0,
    "WTNonSubjectAmountSC": 0,
    "WTNonSubjectAmountFC": 0,
    "WTExemptedAmount": 0,
    "WTExemptedAmountSC": 0,
    "WTExemptedAmountFC": 0,
    "BaseAmount": 0,
    "BaseAmountSC": 0,
    "BaseAmountFC": 0,
    "WTAmount": 0,
    "WTAmountSC": 0,
    "WTAmountFC": 0,
    "VatDate": null,
    "DocumentsOwner": null,
    "FolioPrefixString": null,
    "FolioNumber": null,
    "DocumentSubType": "bod_None",
    "BPChannelCode": null,
    "BPChannelContact": null,
    "Address2": "",
    "DocumentStatus": "bost_Open",
    "PeriodIndicator": "Default",
    "PayToCode": null,
    "ManualNumber": null,
    "UseShpdGoodsAct": "tNO",
    "IsPayToBank": "tNO",
    "PayToBankCountry": null,
    "PayToBankCode": null,
    "PayToBankAccountNo": null,
    "PayToBankBranch": null,
    "BPL_IDAssignedToInvoice": null,
    "DownPayment": 0,
    "ReserveInvoice": "tNO",
    "LanguageCode": 3,
    "TrackingNumber": null,
    "PickRemark": null,
    "ClosingDate": null,
    "SequenceCode": null,
    "SequenceSerial": null,
    "SeriesString": null,
    "SubSeriesString": null,
    "SequenceModel": "0",
    "UseCorrectionVATGroup": "tNO",
    "TotalDiscount": -147.27,
    "DownPaymentAmount": 0,
    "DownPaymentPercentage": 0,
    "DownPaymentType": "dptInvoice",
    "DownPaymentAmountSC": 0,
    "DownPaymentAmountFC": 0,
    "VatPercent": 0,
    "ServiceGrossProfitPercent": 0,
    "OpeningRemarks": null,
    "ClosingRemarks": null,
    "RoundingDiffAmount": 0,
    "RoundingDiffAmountFC": 0,
    "RoundingDiffAmountSC": 0,
    "Cancelled": "tNO",
    "SignatureInputMessage": null,
    "SignatureDigest": null,
    "CertificationNumber": null,
    "PrivateKeyVersion": null,
    "ControlAccount": "_SYS00000000010",
    "InsuranceOperation347": "tNO",
    "ArchiveNonremovableSalesQuotation": "tNO",
    "GTSChecker": null,
    "GTSPayee": null,
    "ExtraMonth": 0,
    "ExtraDays": 0,
    "CashDiscountDateOffset": 0,
    "StartFrom": "pdt_None",
    "NTSApproved": "tNO",
    "ETaxWebSite": null,
    "ETaxNumber": null,
    "NTSApprovedNumber": null,
    "EDocGenerationType": "edocNotRelevant",
    "EDocSeries": null,
    "EDocNum": null,
    "EDocExportFormat": null,
    "EDocStatus": "edoc_Ok",
    "EDocErrorCode": null,
    "EDocErrorMessage": null,
    "DownPaymentStatus": "so_Open",
    "GroupSeries": null,
    "GroupNumber": null,
    "GroupHandWritten": "tNO",
    "ReopenOriginalDocument": null,
    "ReopenManuallyClosedOrCanceledDocument": null,
    "CreateOnlineQuotation": "tNO",
    "POSEquipmentNumber": null,
    "POSManufacturerSerialNumber": null,
    "POSCashierNumber": null,
    "ApplyCurrentVATRatesForDownPaymentsToDraw": "tNO",
    "ClosingOption": "coByCurrentSystemDate",
    "SpecifiedClosingDate": null,
    "OpenForLandedCosts": "tYES",
    "AuthorizationStatus": "dasWithout",
    "TotalDiscountFC": 0,
    "TotalDiscountSC": -147.27,
    "RelevantToGTS": "tNO",
    "BPLName": null,
    "VATRegNum": null,
    "AnnualInvoiceDeclarationReference": null,
    "Supplier": null,
    "Releaser": null,
    "Receiver": null,
    "BlanketAgreementNumber": null,
    "IsAlteration": "tNO",
    "CancelStatus": "csNo",
    "AssetValueDate": null,
    "DocumentDelivery": "ddtNoneSeleted",
    "AuthorizationCode": null,
    "StartDeliveryDate": null,
    "StartDeliveryTime": null,
    "EndDeliveryDate": null,
    "EndDeliveryTime": null,
    "VehiclePlate": null,
    "ATDocumentType": null,
    "ElecCommStatus": null,
    "ElecCommMessage": null,
    "ReuseDocumentNum": "tNO",
    "ReuseNotaFiscalNum": "tNO",
    "PrintSEPADirect": "tNO",
    "FiscalDocNum": null,
    "POSDailySummaryNo": null,
    "POSReceiptNo": null,
    "PointOfIssueCode": null,
    "Letter": null,
    "FolioNumberFrom": null,
    "FolioNumberTo": null,
    "InterimType": "boidt_None",
    "RelatedType": -1,
    "RelatedEntry": null,
    "SAPPassport": null,
    "DocumentTaxID": null,
    "DateOfReportingControlStatementVAT": null,
    "ReportingSectionControlStatementVAT": null,
    "ExcludeFromTaxReportControlStatementVAT": "tNO",
    "POS_CashRegister": null,
    "UpdateTime": "17:18:23",
    "CreateQRCodeFrom": null,
    "PriceMode": null,
    "ShipFrom": null,
    "CommissionTrade": "ct_Empty",
    "CommissionTradeReturn": "tNO",
    "UseBillToAddrToDetermineTax": "tNO",
    "Cig": null,
    "Cup": null,
    "FatherCard": null,
    "FatherType": "cPayments_sum",
    "ShipState": null,
    "ShipPlace": null,
    "CustOffice": null,
    "FCI": null,
    "U_SYNCFLAG": null,
    "U_WEBORDID": null,
    "U_NumAtCard": null,
    "U_PAYMETH": null,
    "U_TRANID": null,
    "U_Coupon": null,
    "U_DLVFLAG": null,
    "U_DeliveryId": null,
    "U_InvoiceId": null,
    "U_CreditMemoId": null,
    "U_FulfillmentId": null,
    "U_QuoteId": null,
    "Document_ApprovalRequests": [],
    "DocumentLines": [
      {
        "LineNum": 0,
        "ItemCode": "1959677000000064297",
        "ItemDescription": "BoltCharge Power Bank",
        "Quantity": 1,
        "ShipDate": "2025-04-04",
        "Price": 2000,
        "PriceAfterVAT": 2000,
        "Currency": "$",
        "Rate": 0,
        "DiscountPercent": 0,
        "VendorNum": null,
        "SerialNum": null,
        "WarehouseCode": "01",
        "SalesPersonCode": -1,
        "CommisionPercent": 0,
        "TreeType": "iNotATree",
        "AccountCode": "_SYS00000000081",
        "UseBaseUnits": "tNO",
        "SupplierCatNum": null,
        "CostingCode": null,
        "ProjectCode": null,
        "BarCode": null,
        "VatGroup": null,
        "Height1": 0,
        "Hight1Unit": null,
        "Height2": 0,
        "Height2Unit": null,
        "Lengh1": 0,
        "Lengh1Unit": null,
        "Lengh2": 0,
        "Lengh2Unit": null,
        "Weight1": 0,
        "Weight1Unit": null,
        "Weight2": 0,
        "Weight2Unit": null,
        "Factor1": 1,
        "Factor2": 1,
        "Factor3": 1,
        "Factor4": 1,
        "BaseType": -1,
        "BaseEntry": null,
        "BaseLine": null,
        "Volume": 0,
        "VolumeUnit": 5,
        "Width1": 0,
        "Width1Unit": null,
        "Width2": 0,
        "Width2Unit": null,
        "Address": "",
        "TaxCode": "",
        "TaxType": "tt_Yes",
        "TaxLiable": "tYES",
        "PickStatus": "tNO",
        "PickQuantity": 0,
        "PickListIdNumber": null,
        "OriginalItem": null,
        "BackOrder": "tYES",
        "FreeText": null,
        "ShippingMethod": 1,
        "POTargetNum": null,
        "POTargetEntry": null,
        "POTargetRowNum": null,
        "CorrectionInvoiceItem": "ciis_ShouldBe",
        "CorrInvAmountToStock": 0,
        "CorrInvAmountToDiffAcct": 0,
        "AppliedTax": 0,
        "AppliedTaxFC": 0,
        "AppliedTaxSC": 0,
        "WTLiable": "tNO",
        "DeferredTax": "tNO",
        "EqualizationTaxPercent": 0,
        "TotalEqualizationTax": 0,
        "TotalEqualizationTaxFC": 0,
        "TotalEqualizationTaxSC": 0,
        "NetTaxAmount": 0,
        "NetTaxAmountFC": 0,
        "NetTaxAmountSC": 0,
        "MeasureUnit": null,
        "UnitsOfMeasurment": 1,
        "LineTotal": 2000,
        "TaxPercentagePerRow": 0,
        "TaxTotal": 0,
        "ConsumerSalesForecast": "tYES",
        "ExciseAmount": 0,
        "TaxPerUnit": 0,
        "TotalInclTax": 0,
        "CountryOrg": null,
        "SWW": null,
        "TransactionType": null,
        "DistributeExpense": "tYES",
        "RowTotalFC": 0,
        "RowTotalSC": 2000,
        "LastBuyInmPrice": 0,
        "LastBuyDistributeSumFc": 0,
        "LastBuyDistributeSumSc": 0,
        "LastBuyDistributeSum": 0,
        "StockDistributesumForeign": 0,
        "StockDistributesumSystem": 0,
        "StockDistributesum": 0,
        "StockInmPrice": 0,
        "PickStatusEx": "dlps_NotPicked",
        "TaxBeforeDPM": 0,
        "TaxBeforeDPMFC": 0,
        "TaxBeforeDPMSC": 0,
        "CFOPCode": null,
        "CSTCode": null,
        "Usage": null,
        "TaxOnly": "tNO",
        "VisualOrder": 0,
        "BaseOpenQuantity": 0,
        "UnitPrice": 2000,
        "LineStatus": "bost_Open",
        "PackageQuantity": 1,
        "Text": null,
        "LineType": "dlt_Regular",
        "COGSCostingCode": null,
        "COGSAccountCode": "_SYS00000000088",
        "ChangeAssemlyBoMWarehouse": "N",
        "GrossBuyPrice": 0,
        "GrossBase": -5,
        "GrossProfitTotalBasePrice": 0,
        "CostingCode2": null,
        "CostingCode3": null,
        "CostingCode4": null,
        "CostingCode5": null,
        "ItemDetails": "BK2BlueSkyAlpha",
        "LocationCode": null,
        "ActualDeliveryDate": null,
        "RemainingOpenQuantity": 1,
        "OpenAmount": 2000,
        "OpenAmountFC": 0,
        "OpenAmountSC": 2000,
        "ExLineNo": null,
        "RequiredDate": null,
        "RequiredQuantity": 0,
        "COGSCostingCode2": null,
        "COGSCostingCode3": null,
        "COGSCostingCode4": null,
        "COGSCostingCode5": null,
        "CSTforIPI": null,
        "CSTforPIS": null,
        "CSTforCOFINS": null,
        "CreditOriginCode": null,
        "WithoutInventoryMovement": "tNO",
        "AgreementNo": null,
        "AgreementRowNumber": null,
        "ActualBaseEntry": null,
        "ActualBaseLine": null,
        "DocEntry": 17025,
        "Surpluses": 0,
        "DefectAndBreakup": 0,
        "Shortages": 0,
        "ConsiderQuantity": "tNO",
        "PartialRetirement": "tNO",
        "RetirementQuantity": 0,
        "RetirementAPC": 0,
        "ThirdParty": "tNO",
        "PoNum": null,
        "PoItmNum": null,
        "ExpenseType": null,
        "ReceiptNumber": null,
        "ExpenseOperationType": null,
        "FederalTaxID": null,
        "GrossProfit": 2073.64,
        "GrossProfitFC": 0,
        "GrossProfitSC": 2073.64,
        "PriceSource": "dpsActivePriceList",
        "StgSeqNum": null,
        "StgEntry": null,
        "StgDesc": null,
        "UoMEntry": -1,
        "UoMCode": "Manual",
        "InventoryQuantity": 1,
        "RemainingOpenInventoryQuantity": 1,
        "ParentLineNum": null,
        "Incoterms": 0,
        "TransportMode": 0,
        "NatureOfTransaction": null,
        "DestinationCountryForImport": null,
        "DestinationRegionForImport": null,
        "OriginCountryForExport": null,
        "OriginRegionForExport": null,
        "ItemType": "dit_Item",
        "ChangeInventoryQuantityIndependently": "tNO",
        "FreeOfChargeBP": "tNO",
        "SACEntry": null,
        "HSNEntry": null,
        "GrossPrice": 2000,
        "GrossTotal": 2000,
        "GrossTotalFC": 0,
        "GrossTotalSC": 2000,
        "NCMCode": -1,
        "NVECode": null,
        "IndEscala": "tNO",
        "CtrSealQty": 0,
        "CNJPMan": null,
        "CESTCode": null,
        "UFFiscalBenefitCode": null,
        "ShipToCode": null,
        "ShipToDescription": "",
        "OwnerCode": null,
        "ExternalCalcTaxRate": 0,
        "ExternalCalcTaxAmount": 0,
        "ExternalCalcTaxAmountFC": 0,
        "ExternalCalcTaxAmountSC": 0,
        "StandardItemIdentification": null,
        "CommodityClassification": null,
        "UnencumberedReason": null,
        "U_WebOrderItemId": null,
        "U_CustomOption": null,
        "LineTaxJurisdictions": [],
        "DocumentLineAdditionalExpenses": [],
        "WithholdingTaxLines": [],
        "SerialNumbers": [],
        "BatchNumbers": [],
        "DocumentLinesBinAllocations": []
      },
      {
        "LineNum": 1,
        "ItemCode": "1959677000000167002",
        "ItemDescription": "Coffeecup",
        "Quantity": 1,
        "ShipDate": "2025-04-04",
        "Price": 2000,
        "PriceAfterVAT": 2000,
        "Currency": "$",
        "Rate": 0,
        "DiscountPercent": 0,
        "VendorNum": null,
        "SerialNum": null,
        "WarehouseCode": "01",
        "SalesPersonCode": -1,
        "CommisionPercent": 0,
        "TreeType": "iNotATree",
        "AccountCode": "_SYS00000000081",
        "UseBaseUnits": "tNO",
        "SupplierCatNum": null,
        "CostingCode": null,
        "ProjectCode": null,
        "BarCode": null,
        "VatGroup": null,
        "Height1": 0,
        "Hight1Unit": null,
        "Height2": 0,
        "Height2Unit": null,
        "Lengh1": 0,
        "Lengh1Unit": null,
        "Lengh2": 0,
        "Lengh2Unit": null,
        "Weight1": 0,
        "Weight1Unit": null,
        "Weight2": 0,
        "Weight2Unit": null,
        "Factor1": 1,
        "Factor2": 1,
        "Factor3": 1,
        "Factor4": 1,
        "BaseType": -1,
        "BaseEntry": null,
        "BaseLine": null,
        "Volume": 0,
        "VolumeUnit": 5,
        "Width1": 0,
        "Width1Unit": null,
        "Width2": 0,
        "Width2Unit": null,
        "Address": "",
        "TaxCode": "",
        "TaxType": "tt_Yes",
        "TaxLiable": "tYES",
        "PickStatus": "tNO",
        "PickQuantity": 0,
        "PickListIdNumber": null,
        "OriginalItem": null,
        "BackOrder": "tYES",
        "FreeText": null,
        "ShippingMethod": 1,
        "POTargetNum": null,
        "POTargetEntry": null,
        "POTargetRowNum": null,
        "CorrectionInvoiceItem": "ciis_ShouldBe",
        "CorrInvAmountToStock": 0,
        "CorrInvAmountToDiffAcct": 0,
        "AppliedTax": 0,
        "AppliedTaxFC": 0,
        "AppliedTaxSC": 0,
        "WTLiable": "tNO",
        "DeferredTax": "tNO",
        "EqualizationTaxPercent": 0,
        "TotalEqualizationTax": 0,
        "TotalEqualizationTaxFC": 0,
        "TotalEqualizationTaxSC": 0,
        "NetTaxAmount": 0,
        "NetTaxAmountFC": 0,
        "NetTaxAmountSC": 0,
        "MeasureUnit": null,
        "UnitsOfMeasurment": 1,
        "LineTotal": 2000,
        "TaxPercentagePerRow": 0,
        "TaxTotal": 0,
        "ConsumerSalesForecast": "tYES",
        "ExciseAmount": 0,
        "TaxPerUnit": 0,
        "TotalInclTax": 0,
        "CountryOrg": null,
        "SWW": null,
        "TransactionType": null,
        "DistributeExpense": "tYES",
        "RowTotalFC": 0,
        "RowTotalSC": 2000,
        "LastBuyInmPrice": 0,
        "LastBuyDistributeSumFc": 0,
        "LastBuyDistributeSumSc": 0,
        "LastBuyDistributeSum": 0,
        "StockDistributesumForeign": 0,
        "StockDistributesumSystem": 0,
        "StockDistributesum": 0,
        "StockInmPrice": 0,
        "PickStatusEx": "dlps_NotPicked",
        "TaxBeforeDPM": 0,
        "TaxBeforeDPMFC": 0,
        "TaxBeforeDPMSC": 0,
        "CFOPCode": null,
        "CSTCode": null,
        "Usage": null,
        "TaxOnly": "tNO",
        "VisualOrder": 1,
        "BaseOpenQuantity": 0,
        "UnitPrice": 2000,
        "LineStatus": "bost_Open",
        "PackageQuantity": 1,
        "Text": null,
        "LineType": "dlt_Regular",
        "COGSCostingCode": null,
        "COGSAccountCode": "_SYS00000000088",
        "ChangeAssemlyBoMWarehouse": "N",
        "GrossBuyPrice": 0,
        "GrossBase": -5,
        "GrossProfitTotalBasePrice": 0,
        "CostingCode2": null,
        "CostingCode3": null,
        "CostingCode4": null,
        "CostingCode5": null,
        "ItemDetails": "BK2BlueSkyAlpha",
        "LocationCode": null,
        "ActualDeliveryDate": null,
        "RemainingOpenQuantity": 1,
        "OpenAmount": 2000,
        "OpenAmountFC": 0,
        "OpenAmountSC": 2000,
        "ExLineNo": null,
        "RequiredDate": null,
        "RequiredQuantity": 0,
        "COGSCostingCode2": null,
        "COGSCostingCode3": null,
        "COGSCostingCode4": null,
        "COGSCostingCode5": null,
        "CSTforIPI": null,
        "CSTforPIS": null,
        "CSTforCOFINS": null,
        "CreditOriginCode": null,
        "WithoutInventoryMovement": "tNO",
        "AgreementNo": null,
        "AgreementRowNumber": null,
        "ActualBaseEntry": null,
        "ActualBaseLine": null,
        "DocEntry": 17025,
        "Surpluses": 0,
        "DefectAndBreakup": 0,
        "Shortages": 0,
        "ConsiderQuantity": "tNO",
        "PartialRetirement": "tNO",
        "RetirementQuantity": 0,
        "RetirementAPC": 0,
        "ThirdParty": "tNO",
        "PoNum": null,
        "PoItmNum": null,
        "ExpenseType": null,
        "ReceiptNumber": null,
        "ExpenseOperationType": null,
        "FederalTaxID": null,
        "GrossProfit": 2073.63,
        "GrossProfitFC": 0,
        "GrossProfitSC": 2073.63,
        "PriceSource": "dpsActivePriceList",
        "StgSeqNum": null,
        "StgEntry": null,
        "StgDesc": null,
        "UoMEntry": -1,
        "UoMCode": "Manual",
        "InventoryQuantity": 1,
        "RemainingOpenInventoryQuantity": 1,
        "ParentLineNum": null,
        "Incoterms": 0,
        "TransportMode": 0,
        "NatureOfTransaction": null,
        "DestinationCountryForImport": null,
        "DestinationRegionForImport": null,
        "OriginCountryForExport": null,
        "OriginRegionForExport": null,
        "ItemType": "dit_Item",
        "ChangeInventoryQuantityIndependently": "tNO",
        "FreeOfChargeBP": "tNO",
        "SACEntry": null,
        "HSNEntry": null,
        "GrossPrice": 2000,
        "GrossTotal": 2000,
        "GrossTotalFC": 0,
        "GrossTotalSC": 2000,
        "NCMCode": -1,
        "NVECode": null,
        "IndEscala": "tNO",
        "CtrSealQty": 0,
        "CNJPMan": null,
        "CESTCode": null,
        "UFFiscalBenefitCode": null,
        "ShipToCode": null,
        "ShipToDescription": "",
        "OwnerCode": null,
        "ExternalCalcTaxRate": 0,
        "ExternalCalcTaxAmount": 0,
        "ExternalCalcTaxAmountFC": 0,
        "ExternalCalcTaxAmountSC": 0,
        "StandardItemIdentification": null,
        "CommodityClassification": null,
        "UnencumberedReason": null,
        "U_WebOrderItemId": null,
        "U_CustomOption": null,
        "LineTaxJurisdictions": [],
        "DocumentLineAdditionalExpenses": [],
        "WithholdingTaxLines": [],
        "SerialNumbers": [],
        "BatchNumbers": [],
        "DocumentLinesBinAllocations": []
      }
    ],
    "ElectronicProtocols": [],
    "DocumentAdditionalExpenses": [],
    "WithholdingTaxDataWTXCollection": [],
    "WithholdingTaxDataCollection": [],
    "DocumentSpecialLines": [],
    "TaxExtension": {
      "TaxId0": null,
      "TaxId1": null,
      "TaxId2": null,
      "TaxId3": null,
      "TaxId4": null,
      "TaxId5": null,
      "TaxId6": null,
      "TaxId7": null,
      "TaxId8": null,
      "TaxId9": null,
      "State": null,
      "County": null,
      "Incoterms": null,
      "Vehicle": null,
      "VehicleState": null,
      "NFRef": null,
      "Carrier": null,
      "PackQuantity": null,
      "PackDescription": null,
      "Brand": null,
      "ShipUnitNo": null,
      "NetWeight": 0,
      "GrossWeight": 0,
      "StreetS": null,
      "BlockS": null,
      "BuildingS": null,
      "CityS": null,
      "ZipCodeS": null,
      "CountyS": null,
      "StateS": null,
      "CountryS": null,
      "StreetB": null,
      "BlockB": null,
      "BuildingB": null,
      "CityB": null,
      "ZipCodeB": null,
      "CountyB": null,
      "StateB": null,
      "CountryB": null,
      "ImportOrExport": null,
      "MainUsage": null,
      "GlobalLocationNumberS": null,
      "GlobalLocationNumberB": null,
      "TaxId12": null,
      "TaxId13": null,
      "BillOfEntryNo": null,
      "BillOfEntryDate": null,
      "OriginalBillOfEntryNo": null,
      "OriginalBillOfEntryDate": null,
      "ImportOrExportType": "et_IpmortsOrExports",
      "PortCode": null,
      "DocEntry": 17025,
      "BoEValue": 0,
      "ClaimRefund": null,
      "DifferentialOfTaxRate": null,
      "IsIGSTAccount": null
    },
    "AddressExtension": {
      "ShipToStreet": null,
      "ShipToStreetNo": null,
      "ShipToBlock": null,
      "ShipToBuilding": null,
      "ShipToCity": null,
      "ShipToZipCode": null,
      "ShipToCounty": null,
      "ShipToState": null,
      "ShipToCountry": null,
      "ShipToAddressType": null,
      "BillToStreet": null,
      "BillToStreetNo": null,
      "BillToBlock": null,
      "BillToBuilding": null,
      "BillToCity": null,
      "BillToZipCode": null,
      "BillToCounty": null,
      "BillToState": null,
      "BillToCountry": null,
      "BillToAddressType": null,
      "ShipToGlobalLocationNumber": null,
      "BillToGlobalLocationNumber": null,
      "ShipToAddress2": null,
      "ShipToAddress3": null,
      "BillToAddress2": null,
      "BillToAddress3": null,
      "PlaceOfSupply": null,
      "PurchasePlaceOfSupply": null,
      "DocEntry": 17025,
      "GoodsIssuePlaceBP": null,
      "GoodsIssuePlaceCNPJ": null,
      "GoodsIssuePlaceCPF": null,
      "GoodsIssuePlaceStreet": null,
      "GoodsIssuePlaceStreetNo": null,
      "GoodsIssuePlaceBuilding": null,
      "GoodsIssuePlaceZip": null,
      "GoodsIssuePlaceBlock": null,
      "GoodsIssuePlaceCity": null,
      "GoodsIssuePlaceCounty": null,
      "GoodsIssuePlaceState": null,
      "GoodsIssuePlaceCountry": null,
      "GoodsIssuePlacePhone": null,
      "GoodsIssuePlaceEMail": null,
      "GoodsIssuePlaceDepartureDate": null,
      "DeliveryPlaceBP": null,
      "DeliveryPlaceCNPJ": null,
      "DeliveryPlaceCPF": null,
      "DeliveryPlaceStreet": null,
      "DeliveryPlaceStreetNo": null,
      "DeliveryPlaceBuilding": null,
      "DeliveryPlaceZip": null,
      "DeliveryPlaceBlock": null,
      "DeliveryPlaceCity": null,
      "DeliveryPlaceCounty": null,
      "DeliveryPlaceState": null,
      "DeliveryPlaceCountry": null,
      "DeliveryPlacePhone": null,
      "DeliveryPlaceEMail": null,
      "DeliveryPlaceDepartureDate": null,
      "U_WBCUSTADDIDS": null,
      "U_WBCUSTADDIDB": null,
      "U_TelNoS": null,
      "U_TelNoB": null
    },
    "DocumentReferences": []
  }
]
```
</code>
</pre>
</div>

---

### Code

```javascript
let totalRevenue = 0;
let internationalCount = 0;
let productSales = {};
let currency = "$";

// Single loop to handle everything
for (let order of $payload) {
    if (!order) continue;

    // 1. Revenue & Currency
    if (order.DocTotal) {
      const docTotal = order.DocTotal; 
      if(order.DocCurrency="$"){
        totalRevenue +=  Math.round(docTotal) || 0;
      }
      else{
        totalRevenue +=  Math.round(docTotal)/82 || 0
      }
  }

    // 2. International Check
    // Using optional chaining to prevent errors if TaxExtension is missing
    let country = order.TaxExtension?.CountryS || "";
    if(country == null || country == ""){
      country = "US";
    }
  
    if (country !== "US") {
        internationalCount++;
    }

    // 3. Product Sales
    if (order.DocumentLines) {
        for (let line of order.DocumentLines) {
            let productName = line.ItemDescription || line.ItemCode || "Unknown";
            let qty = line.Quantity || 0;
            productSales[productName] = (productSales[productName] || 0) + qty;
        }
    }
    else{
      continue
    }
}

// Find Top Product
let topProduct = "";
let maxQty = 0;
for (let [name, qty] of Object.entries(productSales)) {
    if (qty > maxQty) {
        maxQty = qty;
        topProduct = name;
    }
}

// ... rest of your message and return logic
 
var message =
    "<b>Daily Report:</b><br><br>" +
    "We processed " + $payload.length +
    " orders today for a total of " + currency + totalRevenue + ".<br>" +
    "International orders: " + internationalCount + ".<br>" +
    "Top Product: " + topProduct + " (" + maxQty + " units).";
;

return [{
        json: {
            total_orders: $payload.length,
            total_revenue: totalRevenue,
            international_orders: internationalCount,
            top_selling_product: topProduct,
            top_product_quantity: maxQty,
            message: message
        }
    }];

```

**Code Node Output**
```JSON
[
  {
    "_pair_index": 0,
    "json": {
      "total_orders": 2,
      "total_revenue": 7696,
      "international_orders": 0,
      "top_selling_product": "Biker Jacket",
      "top_product_quantity": 100,
      "message": "<b>Daily Report:</b><br><br>We processed 2 orders today for a total of $7696.<br>International orders: 0.<br>Top Product: Biker Jacket (100 units)."
    }
  }
]
```
---

> The message sent to **Microsoft Teams** will appear as:

```Text
Daily Report:
We processed 2 orders today for a total of $7696.
International orders: 0.
Top Product: Biker Jacket (100 units).
```

</TabItem>

<TabItem value="run-each" label="Run Once for Each Item">

### Use Case 1: Convert Currency Symbols to ISO Codes

In **SAP Business One**, item prices are stored using **currency symbols** such as:

- `$`
- `€`
- `£`
- `₹`

However, when creating or updating products in **Pipedrive**, the API does **not accept currency symbols**.  
Instead, it requires **ISO currency codes**, such as:

- `USD`
- `EUR`
- `GBP`
- `INR`

To ensure compatibility and data consistency, we transform currency symbols from SAP into ISO currency codes before sending the data to Pipedrive.

---

### Data Flow Overview

```
SAP Service Layer
        ↓
Currency Symbol ($)
        ↓
Transformation Layer (Code Node)
        ↓
ISO Currency Code (USD)
        ↓
Pipedrive Product Creation API
```

---

<img src="\img\platform\key-concepts\nodes\built-in\code\convertCurrencySymbolWorkflow.png" alt="convert currency workflow" width="700"/>

---

### Why Run Once for Each Item?

- `$payload` is a **Single Object**
- The engine automatically runs the code once per item
- No manual loop over all items is required
- Ideal for record-level transformation

> This mode is best when modifying one record independently of others.

---

> Below is a sample SAP Business One item payload.

**Note:** The Currency field is displayed as `"Currency": "$"`.

<div
  style={{
    maxHeight: '350px',
    overflow: 'auto',
    border: '1px solid #ddd',
    padding: '12px',
    borderRadius: '6px'
  }}
>
<pre>
<code>
```JSON
[
   {
    "_pair_index": 0,
    "ItemCode": "LM0003",
    "ItemName": "BlueLymm",
    "ForeignName": "Blue Sky Barron",
    "ItemsGroupCode": 100,
    "CustomsGroupCode": -1,
    "SalesVATGroup": null,
    "BarCode": null,
    "VatLiable": "tYES",
    "PurchaseItem": "tYES",
    "SalesItem": "tYES",
    "InventoryItem": "tYES",
    "IncomeAccount": null,
    "ExemptIncomeAccount": null,
    "ExpanseAccount": null,
    "Mainsupplier": null,
    "SupplierCatalogNo": null,
    "DesiredInventory": 0,
    "MinInventory": 0,
    "Picture": null,
    "User_Text": "BK2BlueSkyAlpha",
    "SerialNum": null,
    "CommissionPercent": 0,
    "CommissionSum": 0,
    "CommissionGroup": 0,
    "TreeType": "iNotATree",
    "AssetItem": "tNO",
    "DataExportCode": null,
    "Manufacturer": -1,
    "QuantityOnStock": 0,
    "QuantityOrderedFromVendors": 0,
    "QuantityOrderedByCustomers": 0,
    "ManageSerialNumbers": "tNO",
    "ManageBatchNumbers": "tNO",
    "Valid": "tYES",
    "ValidFrom": null,
    "ValidTo": null,
    "ValidRemarks": null,
    "Frozen": "tNO",
    "FrozenFrom": null,
    "FrozenTo": null,
    "FrozenRemarks": null,
    "SalesUnit": null,
    "SalesItemsPerUnit": 1,
    "SalesPackagingUnit": null,
    "SalesQtyPerPackUnit": 1,
    "SalesUnitLength": 0,
    "SalesLengthUnit": null,
    "SalesUnitWidth": 0,
    "SalesWidthUnit": null,
    "SalesUnitHeight": 0,
    "SalesHeightUnit": null,
    "SalesUnitVolume": 0,
    "SalesVolumeUnit": 5,
    "SalesUnitWeight": 0,
    "SalesWeightUnit": null,
    "PurchaseUnit": null,
    "PurchaseItemsPerUnit": 1,
    "PurchasePackagingUnit": null,
    "PurchaseQtyPerPackUnit": 1,
    "PurchaseUnitLength": 0,
    "PurchaseLengthUnit": null,
    "PurchaseUnitWidth": 0,
    "PurchaseWidthUnit": null,
    "PurchaseUnitHeight": 0,
    "PurchaseHeightUnit": null,
    "PurchaseUnitVolume": 0,
    "PurchaseVolumeUnit": 5,
    "PurchaseUnitWeight": 0,
    "PurchaseWeightUnit": null,
    "PurchaseVATGroup": null,
    "SalesFactor1": 1,
    "SalesFactor2": 1,
    "SalesFactor3": 1,
    "SalesFactor4": 1,
    "PurchaseFactor1": 1,
    "PurchaseFactor2": 1,
    "PurchaseFactor3": 1,
    "PurchaseFactor4": 1,
    "MovingAveragePrice": 0,
    "ForeignRevenuesAccount": null,
    "ECRevenuesAccount": null,
    "ForeignExpensesAccount": null,
    "ECExpensesAccount": null,
    "AvgStdPrice": 0,
    "DefaultWarehouse": null,
    "ShipType": 1,
    "GLMethod": "glm_WH",
    "TaxType": "tt_Yes",
    "MaxInventory": 0,
    "ManageStockByWarehouse": "tNO",
    "PurchaseHeightUnit1": null,
    "PurchaseUnitHeight1": 0,
    "PurchaseLengthUnit1": null,
    "PurchaseUnitLength1": 0,
    "PurchaseWeightUnit1": null,
    "PurchaseUnitWeight1": 0,
    "PurchaseWidthUnit1": null,
    "PurchaseUnitWidth1": 0,
    "SalesHeightUnit1": null,
    "SalesUnitHeight1": 0,
    "SalesLengthUnit1": null,
    "SalesUnitLength1": 0,
    "SalesWeightUnit1": null,
    "SalesUnitWeight1": 0,
    "SalesWidthUnit1": null,
    "SalesUnitWidth1": 0,
    "ForceSelectionOfSerialNumber": "tYES",
    "ManageSerialNumbersOnReleaseOnly": "tNO",
    "WTLiable": "tYES",
    "CostAccountingMethod": "bis_MovingAverage",
    "SWW": null,
    "WarrantyTemplate": null,
    "IndirectTax": "tNO",
    "ArTaxCode": null,
    "ApTaxCode": null,
    "BaseUnitName": null,
    "ItemCountryOrg": null,
    "IssueMethod": "im_Backflush",
    "SRIAndBatchManageMethod": "bomm_OnEveryTransaction",
    "IsPhantom": "tNO",
    "InventoryUOM": null,
    "PlanningSystem": "bop_None",
    "ProcurementMethod": "bom_Buy",
    "ComponentWarehouse": "bomcw_BOM",
    "OrderIntervals": null,
    "OrderMultiple": 0,
    "LeadTime": null,
    "MinOrderQuantity": 0,
    "ItemType": "itItems",
    "ItemClass": "itcMaterial",
    "OutgoingServiceCode": -1,
    "IncomingServiceCode": -1,
    "ServiceGroup": -1,
    "NCMCode": -1,
    "MaterialType": "mt_FinishedGoods",
    "MaterialGroup": -1,
    "ProductSource": "0",
    "Properties1": "tNO",
    "Properties2": "tNO",
    "Properties3": "tNO",
    "Properties4": "tNO",
    "Properties5": "tNO",
    "Properties6": "tNO",
    "Properties7": "tNO",
    "Properties8": "tNO",
    "Properties9": "tNO",
    "Properties10": "tNO",
    "Properties11": "tNO",
    "Properties12": "tNO",
    "Properties13": "tNO",
    "Properties14": "tNO",
    "Properties15": "tNO",
    "Properties16": "tNO",
    "Properties17": "tNO",
    "Properties18": "tNO",
    "Properties19": "tNO",
    "Properties20": "tNO",
    "Properties21": "tNO",
    "Properties22": "tNO",
    "Properties23": "tNO",
    "Properties24": "tNO",
    "Properties25": "tNO",
    "Properties26": "tNO",
    "Properties27": "tNO",
    "Properties28": "tNO",
    "Properties29": "tNO",
    "Properties30": "tNO",
    "Properties31": "tNO",
    "Properties32": "tNO",
    "Properties33": "tNO",
    "Properties34": "tNO",
    "Properties35": "tNO",
    "Properties36": "tNO",
    "Properties37": "tNO",
    "Properties38": "tNO",
    "Properties39": "tNO",
    "Properties40": "tNO",
    "Properties41": "tNO",
    "Properties42": "tNO",
    "Properties43": "tNO",
    "Properties44": "tNO",
    "Properties45": "tNO",
    "Properties46": "tNO",
    "Properties47": "tNO",
    "Properties48": "tNO",
    "Properties49": "tNO",
    "Properties50": "tNO",
    "Properties51": "tNO",
    "Properties52": "tNO",
    "Properties53": "tNO",
    "Properties54": "tNO",
    "Properties55": "tNO",
    "Properties56": "tNO",
    "Properties57": "tNO",
    "Properties58": "tNO",
    "Properties59": "tNO",
    "Properties60": "tNO",
    "Properties61": "tNO",
    "Properties62": "tNO",
    "Properties63": "tNO",
    "Properties64": "tNO",
    "AutoCreateSerialNumbersOnRelease": "tNO",
    "DNFEntry": -1,
    "GTSItemSpec": null,
    "GTSItemTaxCategory": null,
    "FuelID": -1,
    "BeverageTableCode": null,
    "BeverageGroupCode": null,
    "BeverageCommercialBrandCode": -1,
    "Series": 3,
    "ToleranceDays": null,
    "TypeOfAdvancedRules": "toarGeneral",
    "IssuePrimarilyBy": "ipbSerialAndBatchNumbers",
    "NoDiscounts": "tNO",
    "AssetClass": "",
    "AssetGroup": "",
    "InventoryNumber": "",
    "Technician": null,
    "Employee": null,
    "Location": null,
    "AssetStatus": "New",
    "CapitalizationDate": null,
    "StatisticalAsset": "tNO",
    "Cession": "tNO",
    "DeactivateAfterUsefulLife": "tNO",
    "ManageByQuantity": "tNO",
    "UoMGroupEntry": -1,
    "InventoryUoMEntry": -1,
    "DefaultSalesUoMEntry": null,
    "DefaultPurchasingUoMEntry": null,
    "DepreciationGroup": null,
    "AssetSerialNumber": "",
    "InventoryWeight": 0,
    "InventoryWeightUnit": null,
    "InventoryWeight1": 0,
    "InventoryWeightUnit1": null,
    "DefaultCountingUnit": null,
    "CountingItemsPerUnit": 1,
    "DefaultCountingUoMEntry": null,
    "Excisable": "tNO",
    "ChapterID": -1,
    "ScsCode": null,
    "SpProdType": null,
    "ProdStdCost": 0,
    "InCostRollup": "tYES",
    "VirtualAssetItem": "tNO",
    "EnforceAssetSerialNumbers": "tNO",
    "AttachmentEntry": null,
    "LinkedResource": null,
    "UpdateDate": "2026-02-18",
    "UpdateTime": "13:15:34",
    "GSTRelevnt": "tNO",
    "SACEntry": -1,
    "GSTTaxCategory": "gtc_Regular",
    "ServiceCategoryEntry": -1,
    "CapitalGoodsOnHoldPercent": 0,
    "CapitalGoodsOnHoldLimit": 0,
    "AssessableValue": 0,
    "AssVal4WTR": 0,
    "SOIExcisable": "se_NotExcisable",
    "TNVED": null,
    "ImportedItem": "tNO",
    "PricingUnit": -1,
    "CreateDate": "2026-02-18",
    "CreateTime": "13:15:34",
    "NVECode": null,
    "CtrSealQty": 0,
    "CESTCode": -1,
    "LegalText": null,
    "U_WebID": null,
    "U_PriceSyncFlag": null,
    "U_WitmFlag": "F",
    "U_LastStock": null,
    "U_ImageFlag": "F",
    "U_ParentId": null,
    "U_InventoryItemId": null,
    "U_InventoryLevelId": null,
    "U_LastOnStock": 0,
    "U_LastCommittedByCustomers": 0,
    "U_LastCommittedByVendors": 0,
    "U_U_TikTok_ProductID": null,
    "U_U_TikTok_SKU_ID": null,
    "U_U_TikTok_SKU_Code": null,
    "ItemPrices": [
      {
        "PriceList": 1,
        "Price": 4544.45,
        "Currency": "$",
        "AdditionalPrice1": 0,
        "AdditionalCurrency1": "",
        "AdditionalPrice2": 0,
        "AdditionalCurrency2": "",
        "BasePriceList": 1,
        "Factor": 1,
        "UoMPrices": []
      },
      {
        "PriceList": 2,
        "Price": 0,
        "Currency": "",
        "AdditionalPrice1": 0,
        "AdditionalCurrency1": "",
        "AdditionalPrice2": 0,
        "AdditionalCurrency2": "",
        "BasePriceList": 2,
        "Factor": 1,
        "UoMPrices": []
      },
      {
        "PriceList": 3,
        "Price": 0,
        "Currency": "",
        "AdditionalPrice1": 0,
        "AdditionalCurrency1": "",
        "AdditionalPrice2": 0,
        "AdditionalCurrency2": "",
        "BasePriceList": 3,
        "Factor": 1,
        "UoMPrices": []
      },
      {
        "PriceList": 4,
        "Price": 0,
        "Currency": "",
        "AdditionalPrice1": 0,
        "AdditionalCurrency1": "",
        "AdditionalPrice2": 0,
        "AdditionalCurrency2": "",
        "BasePriceList": 4,
        "Factor": 1,
        "UoMPrices": []
      },
      {
        "PriceList": 5,
        "Price": 0,
        "Currency": "",
        "AdditionalPrice1": 0,
        "AdditionalCurrency1": "",
        "AdditionalPrice2": 0,
        "AdditionalCurrency2": "",
        "BasePriceList": 5,
        "Factor": 1,
        "UoMPrices": []
      },
      {
        "PriceList": 6,
        "Price": 0,
        "Currency": "",
        "AdditionalPrice1": 0,
        "AdditionalCurrency1": "",
        "AdditionalPrice2": 0,
        "AdditionalCurrency2": "",
        "BasePriceList": 6,
        "Factor": 1,
        "UoMPrices": []
      },
      {
        "PriceList": 7,
        "Price": 0,
        "Currency": "",
        "AdditionalPrice1": 0,
        "AdditionalCurrency1": "",
        "AdditionalPrice2": 0,
        "AdditionalCurrency2": "",
        "BasePriceList": 7,
        "Factor": 1,
        "UoMPrices": []
      },
      {
        "PriceList": 8,
        "Price": 0,
        "Currency": "",
        "AdditionalPrice1": 0,
        "AdditionalCurrency1": "",
        "AdditionalPrice2": 0,
        "AdditionalCurrency2": "",
        "BasePriceList": 8,
        "Factor": 1,
        "UoMPrices": []
      },
      {
        "PriceList": 9,
        "Price": 0,
        "Currency": "",
        "AdditionalPrice1": 0,
        "AdditionalCurrency1": "",
        "AdditionalPrice2": 0,
        "AdditionalCurrency2": "",
        "BasePriceList": 9,
        "Factor": 1,
        "UoMPrices": []
      },
      {
        "PriceList": 10,
        "Price": 0,
        "Currency": "",
        "AdditionalPrice1": 0,
        "AdditionalCurrency1": "",
        "AdditionalPrice2": 0,
        "AdditionalCurrency2": "",
        "BasePriceList": 10,
        "Factor": 1,
        "UoMPrices": []
      },
      {
        "PriceList": 11,
        "Price": 0,
        "Currency": "",
        "AdditionalPrice1": 0,
        "AdditionalCurrency1": "",
        "AdditionalPrice2": 0,
        "AdditionalCurrency2": "",
        "BasePriceList": 11,
        "Factor": 1,
        "UoMPrices": []
      },
      {
        "PriceList": 12,
        "Price": 9889889,
        "Currency": "",
        "AdditionalPrice1": 0,
        "AdditionalCurrency1": "",
        "AdditionalPrice2": 0,
        "AdditionalCurrency2": "",
        "BasePriceList": 12,
        "Factor": 1,
        "UoMPrices": []
      },
      {
        "PriceList": 13,
        "Price": null,
        "Currency": null,
        "AdditionalPrice1": null,
        "AdditionalCurrency1": null,
        "AdditionalPrice2": null,
        "AdditionalCurrency2": null,
        "BasePriceList": 13,
        "Factor": 1,
        "UoMPrices": []
      },
      {
        "PriceList": 14,
        "Price": null,
        "Currency": null,
        "AdditionalPrice1": null,
        "AdditionalCurrency1": null,
        "AdditionalPrice2": null,
        "AdditionalCurrency2": null,
        "BasePriceList": 14,
        "Factor": 1,
        "UoMPrices": []
      },
      {
        "PriceList": 15,
        "Price": null,
        "Currency": null,
        "AdditionalPrice1": null,
        "AdditionalCurrency1": null,
        "AdditionalPrice2": null,
        "AdditionalCurrency2": null,
        "BasePriceList": 15,
        "Factor": 1,
        "UoMPrices": []
      }
    ],
    "ItemWarehouseInfoCollection": [
      {
        "MinimalStock": 0,
        "MaximalStock": 0,
        "MinimalOrder": 0,
        "StandardAveragePrice": 0,
        "Locked": "tNO",
        "InventoryAccount": null,
        "CostAccount": null,
        "TransferAccount": null,
        "RevenuesAccount": null,
        "VarienceAccount": null,
        "DecreasingAccount": null,
        "IncreasingAccount": null,
        "ReturningAccount": null,
        "ExpensesAccount": null,
        "EURevenuesAccount": null,
        "EUExpensesAccount": null,
        "ForeignRevenueAcc": null,
        "ForeignExpensAcc": null,
        "ExemptIncomeAcc": null,
        "PriceDifferenceAcc": null,
        "WarehouseCode": "01",
        "InStock": 0,
        "Committed": 0,
        "Ordered": 0,
        "CountedQuantity": 0,
        "WasCounted": "tNO",
        "UserSignature": 7,
        "Counted": 0,
        "ExpenseClearingAct": null,
        "PurchaseCreditAcc": null,
        "EUPurchaseCreditAcc": null,
        "ForeignPurchaseCreditAcc": null,
        "SalesCreditAcc": null,
        "SalesCreditEUAcc": null,
        "ExemptedCredits": null,
        "SalesCreditForeignAcc": null,
        "ExpenseOffsettingAccount": null,
        "WipAccount": null,
        "ExchangeRateDifferencesAcct": null,
        "GoodsClearingAcct": null,
        "NegativeInventoryAdjustmentAccount": null,
        "CostInflationOffsetAccount": null,
        "GLDecreaseAcct": null,
        "GLIncreaseAcct": null,
        "PAReturnAcct": null,
        "PurchaseAcct": null,
        "PurchaseOffsetAcct": null,
        "ShippedGoodsAccount": null,
        "StockInflationOffsetAccount": null,
        "StockInflationAdjustAccount": null,
        "VATInRevenueAccount": null,
        "WipVarianceAccount": null,
        "CostInflationAccount": null,
        "WHIncomingCenvatAccount": null,
        "WHOutgoingCenvatAccount": null,
        "StockInTransitAccount": null,
        "WipOffsetProfitAndLossAccount": null,
        "InventoryOffsetProfitAndLossAccount": null,
        "DefaultBin": null,
        "DefaultBinEnforced": "tNO",
        "PurchaseBalanceAccount": null,
        "ItemCode": "LM0003",
        "IndEscala": "tYES",
        "CNJPMan": null,
        "ItemCycleCounts": []
      }
    ],
    "ItemPreferredVendors": [],
    "ItemLocalizationInfos": [],
    "ItemProjects": [],
    "ItemDistributionRules": [],
    "ItemAttributeGroups": [],
    "ItemDepreciationParameters": [],
    "ItemPeriodControls": [],
    "ItemUnitOfMeasurementCollection": [],
    "ItemBarCodeCollection": [],
    "ItemIntrastatExtension": {
      "ItemCode": "LM0003",
      "CommodityCode": null,
      "SupplementaryUnit": null,
      "FactorOfSupplementaryUnit": 0,
      "ImportRegionState": null,
      "ExportRegionState": null,
      "ImportNatureOfTransaction": null,
      "ExportNatureOfTransaction": null,
      "ImportStatisticalProcedure": null,
      "ExportStatisticalProcedure": null,
      "CountryOfOrigin": null,
      "ServiceCode": null,
      "Type": "dDocument_Items",
      "ServiceSupplyMethod": "ssmImmediate",
      "ServicePaymentMethod": "spmOther",
      "ImportRegionCountry": "US",
      "ExportRegionCountry": "US",
      "UseWeightInCalculation": "tYES",
      "IntrastatRelevant": "tNO",
      "StatisticalCode": null
    }
  },
  {
    "_pair_index": 1,
    "ItemCode": "LM0004",
    "ItemName": "GreenLymm",
    "ForeignName": "Blue Sky Barron",
    "ItemsGroupCode": 100,
    "CustomsGroupCode": -1,
    "SalesVATGroup": null,
    "BarCode": null,
    "VatLiable": "tYES",
    "PurchaseItem": "tYES",
    "SalesItem": "tYES",
    "InventoryItem": "tYES",
    "IncomeAccount": null,
    "ExemptIncomeAccount": null,
    "ExpanseAccount": null,
    "Mainsupplier": null,
    "SupplierCatalogNo": null,
    "DesiredInventory": 0,
    "MinInventory": 0,
    "Picture": null,
    "User_Text": "BK2BlueSkyAlpha",
    "SerialNum": null,
    "CommissionPercent": 0,
    "CommissionSum": 0,
    "CommissionGroup": 0,
    "TreeType": "iNotATree",
    "AssetItem": "tNO",
    "DataExportCode": null,
    "Manufacturer": -1,
    "QuantityOnStock": 0,
    "QuantityOrderedFromVendors": 0,
    "QuantityOrderedByCustomers": 0,
    "ManageSerialNumbers": "tNO",
    "ManageBatchNumbers": "tNO",
    "Valid": "tYES",
    "ValidFrom": null,
    "ValidTo": null,
    "ValidRemarks": null,
    "Frozen": "tNO",
    "FrozenFrom": null,
    "FrozenTo": null,
    "FrozenRemarks": null,
    "SalesUnit": null,
    "SalesItemsPerUnit": 1,
    "SalesPackagingUnit": null,
    "SalesQtyPerPackUnit": 1,
    "SalesUnitLength": 0,
    "SalesLengthUnit": null,
    "SalesUnitWidth": 0,
    "SalesWidthUnit": null,
    "SalesUnitHeight": 0,
    "SalesHeightUnit": null,
    "SalesUnitVolume": 0,
    "SalesVolumeUnit": 5,
    "SalesUnitWeight": 0,
    "SalesWeightUnit": null,
    "PurchaseUnit": null,
    "PurchaseItemsPerUnit": 1,
    "PurchasePackagingUnit": null,
    "PurchaseQtyPerPackUnit": 1,
    "PurchaseUnitLength": 0,
    "PurchaseLengthUnit": null,
    "PurchaseUnitWidth": 0,
    "PurchaseWidthUnit": null,
    "PurchaseUnitHeight": 0,
    "PurchaseHeightUnit": null,
    "PurchaseUnitVolume": 0,
    "PurchaseVolumeUnit": 5,
    "PurchaseUnitWeight": 0,
    "PurchaseWeightUnit": null,
    "PurchaseVATGroup": null,
    "SalesFactor1": 1,
    "SalesFactor2": 1,
    "SalesFactor3": 1,
    "SalesFactor4": 1,
    "PurchaseFactor1": 1,
    "PurchaseFactor2": 1,
    "PurchaseFactor3": 1,
    "PurchaseFactor4": 1,
    "MovingAveragePrice": 0,
    "ForeignRevenuesAccount": null,
    "ECRevenuesAccount": null,
    "ForeignExpensesAccount": null,
    "ECExpensesAccount": null,
    "AvgStdPrice": 0,
    "DefaultWarehouse": null,
    "ShipType": 1,
    "GLMethod": "glm_WH",
    "TaxType": "tt_Yes",
    "MaxInventory": 0,
    "ManageStockByWarehouse": "tNO",
    "PurchaseHeightUnit1": null,
    "PurchaseUnitHeight1": 0,
    "PurchaseLengthUnit1": null,
    "PurchaseUnitLength1": 0,
    "PurchaseWeightUnit1": null,
    "PurchaseUnitWeight1": 0,
    "PurchaseWidthUnit1": null,
    "PurchaseUnitWidth1": 0,
    "SalesHeightUnit1": null,
    "SalesUnitHeight1": 0,
    "SalesLengthUnit1": null,
    "SalesUnitLength1": 0,
    "SalesWeightUnit1": null,
    "SalesUnitWeight1": 0,
    "SalesWidthUnit1": null,
    "SalesUnitWidth1": 0,
    "ForceSelectionOfSerialNumber": "tYES",
    "ManageSerialNumbersOnReleaseOnly": "tNO",
    "WTLiable": "tYES",
    "CostAccountingMethod": "bis_MovingAverage",
    "SWW": null,
    "WarrantyTemplate": null,
    "IndirectTax": "tNO",
    "ArTaxCode": null,
    "ApTaxCode": null,
    "BaseUnitName": null,
    "ItemCountryOrg": null,
    "IssueMethod": "im_Backflush",
    "SRIAndBatchManageMethod": "bomm_OnEveryTransaction",
    "IsPhantom": "tNO",
    "InventoryUOM": null,
    "PlanningSystem": "bop_None",
    "ProcurementMethod": "bom_Buy",
    "ComponentWarehouse": "bomcw_BOM",
    "OrderIntervals": null,
    "OrderMultiple": 0,
    "LeadTime": null,
    "MinOrderQuantity": 0,
    "ItemType": "itItems",
    "ItemClass": "itcMaterial",
    "OutgoingServiceCode": -1,
    "IncomingServiceCode": -1,
    "ServiceGroup": -1,
    "NCMCode": -1,
    "MaterialType": "mt_FinishedGoods",
    "MaterialGroup": -1,
    "ProductSource": "0",
    "Properties1": "tNO",
    "Properties2": "tNO",
    "Properties3": "tNO",
    "Properties4": "tNO",
    "Properties5": "tNO",
    "Properties6": "tNO",
    "Properties7": "tNO",
    "Properties8": "tNO",
    "Properties9": "tNO",
    "Properties10": "tNO",
    "Properties11": "tNO",
    "Properties12": "tNO",
    "Properties13": "tNO",
    "Properties14": "tNO",
    "Properties15": "tNO",
    "Properties16": "tNO",
    "Properties17": "tNO",
    "Properties18": "tNO",
    "Properties19": "tNO",
    "Properties20": "tNO",
    "Properties21": "tNO",
    "Properties22": "tNO",
    "Properties23": "tNO",
    "Properties24": "tNO",
    "Properties25": "tNO",
    "Properties26": "tNO",
    "Properties27": "tNO",
    "Properties28": "tNO",
    "Properties29": "tNO",
    "Properties30": "tNO",
    "Properties31": "tNO",
    "Properties32": "tNO",
    "Properties33": "tNO",
    "Properties34": "tNO",
    "Properties35": "tNO",
    "Properties36": "tNO",
    "Properties37": "tNO",
    "Properties38": "tNO",
    "Properties39": "tNO",
    "Properties40": "tNO",
    "Properties41": "tNO",
    "Properties42": "tNO",
    "Properties43": "tNO",
    "Properties44": "tNO",
    "Properties45": "tNO",
    "Properties46": "tNO",
    "Properties47": "tNO",
    "Properties48": "tNO",
    "Properties49": "tNO",
    "Properties50": "tNO",
    "Properties51": "tNO",
    "Properties52": "tNO",
    "Properties53": "tNO",
    "Properties54": "tNO",
    "Properties55": "tNO",
    "Properties56": "tNO",
    "Properties57": "tNO",
    "Properties58": "tNO",
    "Properties59": "tNO",
    "Properties60": "tNO",
    "Properties61": "tNO",
    "Properties62": "tNO",
    "Properties63": "tNO",
    "Properties64": "tNO",
    "AutoCreateSerialNumbersOnRelease": "tNO",
    "DNFEntry": -1,
    "GTSItemSpec": null,
    "GTSItemTaxCategory": null,
    "FuelID": -1,
    "BeverageTableCode": null,
    "BeverageGroupCode": null,
    "BeverageCommercialBrandCode": -1,
    "Series": 3,
    "ToleranceDays": null,
    "TypeOfAdvancedRules": "toarGeneral",
    "IssuePrimarilyBy": "ipbSerialAndBatchNumbers",
    "NoDiscounts": "tNO",
    "AssetClass": "",
    "AssetGroup": "",
    "InventoryNumber": "",
    "Technician": null,
    "Employee": null,
    "Location": null,
    "AssetStatus": "New",
    "CapitalizationDate": null,
    "StatisticalAsset": "tNO",
    "Cession": "tNO",
    "DeactivateAfterUsefulLife": "tNO",
    "ManageByQuantity": "tNO",
    "UoMGroupEntry": -1,
    "InventoryUoMEntry": -1,
    "DefaultSalesUoMEntry": null,
    "DefaultPurchasingUoMEntry": null,
    "DepreciationGroup": null,
    "AssetSerialNumber": "",
    "InventoryWeight": 0,
    "InventoryWeightUnit": null,
    "InventoryWeight1": 0,
    "InventoryWeightUnit1": null,
    "DefaultCountingUnit": null,
    "CountingItemsPerUnit": 1,
    "DefaultCountingUoMEntry": null,
    "Excisable": "tNO",
    "ChapterID": -1,
    "ScsCode": null,
    "SpProdType": null,
    "ProdStdCost": 0,
    "InCostRollup": "tYES",
    "VirtualAssetItem": "tNO",
    "EnforceAssetSerialNumbers": "tNO",
    "AttachmentEntry": null,
    "LinkedResource": null,
    "UpdateDate": "2026-02-18",
    "UpdateTime": "13:15:50",
    "GSTRelevnt": "tNO",
    "SACEntry": -1,
    "GSTTaxCategory": "gtc_Regular",
    "ServiceCategoryEntry": -1,
    "CapitalGoodsOnHoldPercent": 0,
    "CapitalGoodsOnHoldLimit": 0,
    "AssessableValue": 0,
    "AssVal4WTR": 0,
    "SOIExcisable": "se_NotExcisable",
    "TNVED": null,
    "ImportedItem": "tNO",
    "PricingUnit": -1,
    "CreateDate": "2026-02-18",
    "CreateTime": "13:15:50",
    "NVECode": null,
    "CtrSealQty": 0,
    "CESTCode": -1,
    "LegalText": null,
    "U_WebID": null,
    "U_PriceSyncFlag": null,
    "U_WitmFlag": "F",
    "U_LastStock": null,
    "U_ImageFlag": "F",
    "U_ParentId": null,
    "U_InventoryItemId": null,
    "U_InventoryLevelId": null,
    "U_LastOnStock": 0,
    "U_LastCommittedByCustomers": 0,
    "U_LastCommittedByVendors": 0,
    "U_U_TikTok_ProductID": null,
    "U_U_TikTok_SKU_ID": null,
    "U_U_TikTok_SKU_Code": null,
    "ItemPrices": [
      {
        "PriceList": 1,
        "Price": 4544.45,
        "Currency": "$",
        "AdditionalPrice1": 0,
        "AdditionalCurrency1": "",
        "AdditionalPrice2": 0,
        "AdditionalCurrency2": "",
        "BasePriceList": 1,
        "Factor": 1,
        "UoMPrices": []
      },
      {
        "PriceList": 2,
        "Price": 0,
        "Currency": "",
        "AdditionalPrice1": 0,
        "AdditionalCurrency1": "",
        "AdditionalPrice2": 0,
        "AdditionalCurrency2": "",
        "BasePriceList": 2,
        "Factor": 1,
        "UoMPrices": []
      },
      {
        "PriceList": 3,
        "Price": 0,
        "Currency": "",
        "AdditionalPrice1": 0,
        "AdditionalCurrency1": "",
        "AdditionalPrice2": 0,
        "AdditionalCurrency2": "",
        "BasePriceList": 3,
        "Factor": 1,
        "UoMPrices": []
      },
      {
        "PriceList": 4,
        "Price": 0,
        "Currency": "",
        "AdditionalPrice1": 0,
        "AdditionalCurrency1": "",
        "AdditionalPrice2": 0,
        "AdditionalCurrency2": "",
        "BasePriceList": 4,
        "Factor": 1,
        "UoMPrices": []
      },
      {
        "PriceList": 5,
        "Price": 0,
        "Currency": "",
        "AdditionalPrice1": 0,
        "AdditionalCurrency1": "",
        "AdditionalPrice2": 0,
        "AdditionalCurrency2": "",
        "BasePriceList": 5,
        "Factor": 1,
        "UoMPrices": []
      },
      {
        "PriceList": 6,
        "Price": 0,
        "Currency": "",
        "AdditionalPrice1": 0,
        "AdditionalCurrency1": "",
        "AdditionalPrice2": 0,
        "AdditionalCurrency2": "",
        "BasePriceList": 6,
        "Factor": 1,
        "UoMPrices": []
      },
      {
        "PriceList": 7,
        "Price": 0,
        "Currency": "",
        "AdditionalPrice1": 0,
        "AdditionalCurrency1": "",
        "AdditionalPrice2": 0,
        "AdditionalCurrency2": "",
        "BasePriceList": 7,
        "Factor": 1,
        "UoMPrices": []
      },
      {
        "PriceList": 8,
        "Price": 0,
        "Currency": "",
        "AdditionalPrice1": 0,
        "AdditionalCurrency1": "",
        "AdditionalPrice2": 0,
        "AdditionalCurrency2": "",
        "BasePriceList": 8,
        "Factor": 1,
        "UoMPrices": []
      },
      {
        "PriceList": 9,
        "Price": 0,
        "Currency": "",
        "AdditionalPrice1": 0,
        "AdditionalCurrency1": "",
        "AdditionalPrice2": 0,
        "AdditionalCurrency2": "",
        "BasePriceList": 9,
        "Factor": 1,
        "UoMPrices": []
      },
      {
        "PriceList": 10,
        "Price": 0,
        "Currency": "",
        "AdditionalPrice1": 0,
        "AdditionalCurrency1": "",
        "AdditionalPrice2": 0,
        "AdditionalCurrency2": "",
        "BasePriceList": 10,
        "Factor": 1,
        "UoMPrices": []
      },
      {
        "PriceList": 11,
        "Price": 0,
        "Currency": "",
        "AdditionalPrice1": 0,
        "AdditionalCurrency1": "",
        "AdditionalPrice2": 0,
        "AdditionalCurrency2": "",
        "BasePriceList": 11,
        "Factor": 1,
        "UoMPrices": []
      },
      {
        "PriceList": 12,
        "Price": 9889889,
        "Currency": "",
        "AdditionalPrice1": 0,
        "AdditionalCurrency1": "",
        "AdditionalPrice2": 0,
        "AdditionalCurrency2": "",
        "BasePriceList": 12,
        "Factor": 1,
        "UoMPrices": []
      },
      {
        "PriceList": 13,
        "Price": null,
        "Currency": null,
        "AdditionalPrice1": null,
        "AdditionalCurrency1": null,
        "AdditionalPrice2": null,
        "AdditionalCurrency2": null,
        "BasePriceList": 13,
        "Factor": 1,
        "UoMPrices": []
      },
      {
        "PriceList": 14,
        "Price": null,
        "Currency": null,
        "AdditionalPrice1": null,
        "AdditionalCurrency1": null,
        "AdditionalPrice2": null,
        "AdditionalCurrency2": null,
        "BasePriceList": 14,
        "Factor": 1,
        "UoMPrices": []
      },
      {
        "PriceList": 15,
        "Price": null,
        "Currency": null,
        "AdditionalPrice1": null,
        "AdditionalCurrency1": null,
        "AdditionalPrice2": null,
        "AdditionalCurrency2": null,
        "BasePriceList": 15,
        "Factor": 1,
        "UoMPrices": []
      }
    ],
    "ItemWarehouseInfoCollection": [
      {
        "MinimalStock": 0,
        "MaximalStock": 0,
        "MinimalOrder": 0,
        "StandardAveragePrice": 0,
        "Locked": "tNO",
        "InventoryAccount": null,
        "CostAccount": null,
        "TransferAccount": null,
        "RevenuesAccount": null,
        "VarienceAccount": null,
        "DecreasingAccount": null,
        "IncreasingAccount": null,
        "ReturningAccount": null,
        "ExpensesAccount": null,
        "EURevenuesAccount": null,
        "EUExpensesAccount": null,
        "ForeignRevenueAcc": null,
        "ForeignExpensAcc": null,
        "ExemptIncomeAcc": null,
        "PriceDifferenceAcc": null,
        "WarehouseCode": "01",
        "InStock": 0,
        "Committed": 0,
        "Ordered": 0,
        "CountedQuantity": 0,
        "WasCounted": "tNO",
        "UserSignature": 7,
        "Counted": 0,
        "ExpenseClearingAct": null,
        "PurchaseCreditAcc": null,
        "EUPurchaseCreditAcc": null,
        "ForeignPurchaseCreditAcc": null,
        "SalesCreditAcc": null,
        "SalesCreditEUAcc": null,
        "ExemptedCredits": null,
        "SalesCreditForeignAcc": null,
        "ExpenseOffsettingAccount": null,
        "WipAccount": null,
        "ExchangeRateDifferencesAcct": null,
        "GoodsClearingAcct": null,
        "NegativeInventoryAdjustmentAccount": null,
        "CostInflationOffsetAccount": null,
        "GLDecreaseAcct": null,
        "GLIncreaseAcct": null,
        "PAReturnAcct": null,
        "PurchaseAcct": null,
        "PurchaseOffsetAcct": null,
        "ShippedGoodsAccount": null,
        "StockInflationOffsetAccount": null,
        "StockInflationAdjustAccount": null,
        "VATInRevenueAccount": null,
        "WipVarianceAccount": null,
        "CostInflationAccount": null,
        "WHIncomingCenvatAccount": null,
        "WHOutgoingCenvatAccount": null,
        "StockInTransitAccount": null,
        "WipOffsetProfitAndLossAccount": null,
        "InventoryOffsetProfitAndLossAccount": null,
        "DefaultBin": null,
        "DefaultBinEnforced": "tNO",
        "PurchaseBalanceAccount": null,
        "ItemCode": "LM0004",
        "IndEscala": "tYES",
        "CNJPMan": null,
        "ItemCycleCounts": []
      }
    ],
    "ItemPreferredVendors": [],
    "ItemLocalizationInfos": [],
    "ItemProjects": [],
    "ItemDistributionRules": [],
    "ItemAttributeGroups": [],
    "ItemDepreciationParameters": [],
    "ItemPeriodControls": [],
    "ItemUnitOfMeasurementCollection": [],
    "ItemBarCodeCollection": [],
    "ItemIntrastatExtension": {
      "ItemCode": "LM0004",
      "CommodityCode": null,
      "SupplementaryUnit": null,
      "FactorOfSupplementaryUnit": 0,
      "ImportRegionState": null,
      "ExportRegionState": null,
      "ImportNatureOfTransaction": null,
      "ExportNatureOfTransaction": null,
      "ImportStatisticalProcedure": null,
      "ExportStatisticalProcedure": null,
      "CountryOfOrigin": null,
      "ServiceCode": null,
      "Type": "dDocument_Items",
      "ServiceSupplyMethod": "ssmImmediate",
      "ServicePaymentMethod": "spmOther",
      "ImportRegionCountry": "US",
      "ExportRegionCountry": "US",
      "UseWeightInCalculation": "tYES",
      "IntrastatRelevant": "tNO",
      "StatisticalCode": null
    }
  }
]
```
</code>
</pre>
</div>

---

### Code

```javascript
const item = $payload;

if (Array.isArray(item.ItemPrices)) {
  item.ItemPrices = item.ItemPrices.map(price => {
    if (price.Currency) {
      switch (price.Currency.trim()) {
        case "$":
          price.Currency = "USD";
          break;
        case "€":
          price.Currency = "EUR";
          break;
        case "£":
          price.Currency = "GBP";
          break;
        case "₹":
          price.Currency = "INR";
          break;
        default:
          // keep original currency
          break;
      }
    }
    return price;
  });
}

return item;
```

---

### Code Node Output

**Note:** The Currency field is transformed as `"Currency": "USD"`.
```json
"ItemPrices": [
  {
    "PriceList": 1,
    "Price": 4544.45,
    "Currency": "USD",
    "AdditionalPrice1": 0,
    "AdditionalCurrency1": "",
    "AdditionalPrice2": 0,
    "AdditionalCurrency2": "",
    "BasePriceList": 1,
    "Factor": 1,
    "UoMPrices": []
  }
]
```

> Below is a sample **Pipedrive** output payload:

The **Currency** value **$** is converted to **USD** in the Code Node, as mentioned above, and is then utilized in the Pipedrive Node..

<div
  style={{
    maxHeight: '350px',
    overflow: 'auto',
    border: '1px solid #ddd',
    padding: '12px',
    borderRadius: '6px'
  }}
>
<pre>
<code>
```JSON
[
  {
    "_pair_index": 0,
    "success": true,
    "data": {
      "id": 190,
      "name": "BlueLymm",
      "tax": 0,
      "add_time": "2026-02-25T13:12:39Z",
      "update_time": "2026-02-25T13:12:39Z",
      "description": "",
      "code": "LM0003",
      "unit": "",
      "owner_id": 29580789,
      "category": null,
      "is_deleted": false,
      "is_linkable": true,
      "prices": [
        {
          "product_id": 190,
          "price": 5847,
          "currency": "USD",
          "cost": 0,
          "direct_cost": 0,
          "notes": ""
        }
      ],
      "custom_fields": {},
      "visible_to": 3,
      "billing_frequency": "one-time",
      "billing_frequency_cycles": null
    },
    "additional_data": null
  },
  {
    "_pair_index": 1,
    "success": true,
    "data": {
      "id": 191,
      "name": "GreenLymm",
      "tax": 0,
      "add_time": "2026-02-25T13:12:39Z",
      "update_time": "2026-02-25T13:12:39Z",
      "description": "",
      "code": "LM0004",
      "unit": "",
      "owner_id": 29580789,
      "category": null,
      "is_deleted": false,
      "is_linkable": true,
      "prices": [
        {
          "product_id": 191,
          "price": 5847,
          "currency": "USD",
          "cost": 0,
          "direct_cost": 0,
          "notes": ""
        }
      ],
      "custom_fields": {},
      "visible_to": 3,
      "billing_frequency": "one-time",
      "billing_frequency_cycles": null
    },
    "additional_data": null
  }
]
```
</code>
</pre>
</div>
 ---

 ### Use Case 2: ShipStation Order Processing

An eCommerce platform (such as Shopify, WooCommerce, or Magento) sends **order data** into the workflow whenever a customer places an order.

Before creating the shipment in **ShipStation**, the raw order data must be **validated, enriched, and transformed** to match ShipStation's API requirements.

The eCommerce platform may:

- Store item weights in **kilograms (kg)**
- Not explicitly classify shipments as Domestic or International
- Not calculate international shipping surcharges

However, ShipStation requires:

- Weight in **grams**
- Proper shipment classification
- Accurate shipping cost calculations

To ensure successful order creation and accurate shipping charges, we transform the order data before sending it to ShipStation.

---

### Data Flow Overview

```
eCommerce Platform
        ↓
Order Data (kg, raw address, base shipping cost)
        ↓
Transformation Layer (Code Node)
        ↓
Converted Weight (grams)
Shipment Type (Domestic/International)
Shipping Surcharge (if applicable)
        ↓
ShipStation Order Creation API
```
<img src="\img\platform\key-concepts\nodes\built-in\code\shipstationWorkflow.png" alt="connect html source" width="700"/>

---

### Why Run Once for Each Item?

- `$payload` represents **one order**
- The code runs once per order
- No aggregation across multiple orders is required
- Each order is processed independently

> This mode is ideal when enriching or formatting a single record before sending it to another system.

---

> Below is a sample **Ecommerce** order payload:

<div
  style={{
    maxHeight: '350px',
    overflow: 'auto',
    border: '1px solid #ddd',
    padding: '12px',
    borderRadius: '6px'
  }}
>
<pre>
<code>
```JSON
[
  {
    "_pair_index": 0,
    "items": [
      {
        "_pair_index": 0,
        "billingAddress": {
          "id": "gid://shopify/MailingAddress/22793607741749?model_name=Address",
          "firstName": "John",
          "lastName": "Hixon",
          "company": null,
          "address1": "Whitefield (kadugodi) metro station Entrance Kadugodi",
          "address2": null,
          "city": "KadugodiBengaluru",
          "country": "India",
          "countryCodeV2": "IN",
          "zip": "560067",
          "province": "Karnataka",
          "provinceCode": "KA"
        },
        "shippingAddress": {
          "id": "gid://shopify/MailingAddress/22793607708981?model_name=Address",
          "firstName": "John",
          "lastName": "Hixon",
          "company": null,
          "address1": "Whitefield (kadugodi) metro station Entrance Kadugodi",
          "address2": null,
          "city": "KadugodiBengaluru",
          "country": "India",
          "countryCodeV2": "IN",
          "zip": "560067",
          "province": "Karnataka",
          "provinceCode": "KA"
        },
        "customer": {
          "id": "gid://shopify/Customer/10123615863093",
          "firstName": "John",
          "lastName": "Hixon",
          "displayName": "John Hixon",
          "phone": "+919809898989",
          "email": "john12@gmail.com",
          "addresses": [
            {
              "id": "gid://shopify/MailingAddress/12890283082037?model_name=CustomerAddress",
              "address1": "Whitefield (kadugodi) metro station Entrance Kadugodi",
              "address2": null,
              "city": "KadugodiBengaluru",
              "country": "India",
              "countryCodeV2": "IN",
              "firstName": "John",
              "lastName": "Hixon",
              "name": "John Hixon",
              "phone": "+919897983948",
              "province": "Karnataka",
              "provinceCode": "KA",
              "zip": "560067"
            },
            {
              "id": "gid://shopify/MailingAddress/12890284359989?model_name=CustomerAddress",
              "address1": "Pune Okayama Friendship Garden Dattawadi",
              "address2": null,
              "city": "Pune",
              "country": "India",
              "countryCodeV2": "IN",
              "firstName": "Mark",
              "lastName": "Heusen",
              "name": "Mark Heusen",
              "phone": "+919879898948",
              "province": "Maharashtra",
              "provinceCode": "MH",
              "zip": "411030"
            }
          ],
          "defaultAddress": {
            "id": "gid://shopify/MailingAddress/12890283082037?model_name=CustomerAddress",
            "address1": "Whitefield (kadugodi) metro station Entrance Kadugodi",
            "address2": null,
            "city": "KadugodiBengaluru",
            "country": "India",
            "countryCodeV2": "IN",
            "firstName": "John",
            "lastName": "Hixon",
            "name": "John Hixon",
            "phone": "+919897983948",
            "province": "Karnataka",
            "provinceCode": "KA",
            "zip": "560067"
          }
        },
        "id": "gid://shopify/Order/7234327052597",
        "name": "NW-US-1388",
        "createdAt": "2026-02-18T11:46:28Z",
        "currencyCode": "INR",
        "displayFinancialStatus": "PAID",
        "email": "john12@gmail.com",
        "fullyPaid": true,
        "updatedAt": "2026-02-18T11:46:29Z",
        "currentSubtotalPriceSet": {
          "presentmentMoney": {
            "amount": "34686.86"
          }
        },
        "transactions": [
          {
            "id": "gid://shopify/OrderTransaction/8904651702581",
            "gateway": "manual",
            "paymentIcon": {
              "altText": "other"
            },
            "accountNumber": "",
            "amountSet": {
              "presentmentMoney": {
                "amount": "41312.05"
              }
            }
          }
        ],
        "totalDiscountsSet": {
          "presentmentMoney": {
            "amount": "0.0"
          }
        },
        "discountApplications": {
          "nodes": []
        },
        "lineItems": {
          "nodes": [
            {
              "id": "gid://shopify/LineItem/17761653424437",
              "sku": "AB5353",
              "weight": 3.55,
              "quantity": 1,
              "title": "Armani Boots",
              "name": "Armani Boots",
              "originalUnitPriceSet": {
                "presentmentMoney": {
                  "amount": "34343.43"
                }
              },
              "taxLines": [
                {
                  "title": "CGST",
                  "rate": 0.1,
                  "priceSet": {
                    "presentmentMoney": {
                      "amount": "3434.35"
                    }
                  }
                },
                {
                  "title": "IGSTKA",
                  "rate": 0.091,
                  "priceSet": {
                    "presentmentMoney": {
                      "amount": "3125.25"
                    }
                  }
                }
              ]
            },
            {
              "id": "gid://shopify/LineItem/17761653457205",
              "sku": "LB343",
              "weight": 4.44,
              "quantity": 1,
              "title": "Leather Boots",
              "name": "Leather Boots",
              "originalUnitPriceSet": {
                "presentmentMoney": {
                  "amount": "343.43"
                }
              },
              "taxLines": [
                {
                  "title": "CGST",
                  "rate": 0.1,
                  "priceSet": {
                    "presentmentMoney": {
                      "amount": "34.34"
                    }
                  }
                },
                {
                  "title": "IGSTKA",
                  "rate": 0.091,
                  "priceSet": {
                    "presentmentMoney": {
                      "amount": "31.25"
                    }
                  }
                }
              ]
            }
          ]
        },
        "fulfillmentOrders": {
          "nodes": [
            {
              "id": "gid://shopify/FulfillmentOrder/8312426463541",
              "lineItems": {
                "nodes": [
                  {
                    "id": "gid://shopify/FulfillmentOrderLineItem/17924732256565"
                  },
                  {
                    "id": "gid://shopify/FulfillmentOrderLineItem/17924732289333"
                  }
                ]
              }
            }
          ]
        },
        "taxLines": [
          {
            "title": "CGST",
            "rate": 0.1
          },
          {
            "title": "IGSTKA",
            "rate": 0.091
          }
        ],
        "currentTotalTaxSet": {
          "presentmentMoney": {
            "amount": "6625.19"
          }
        },
        "shippingLines": {
          "nodes": []
        }
      }
    ]
  }
]
```
</code>
</pre>
</div>

---

### Code

```javascript
const data = $payload;

if (!Array.isArray(data.items) || data.items.length === 0) {
  return {};
}

const order = data.items[0];
const country = order.shippingAddress?.country || "";

if (!Array.isArray(order.lineItems?.nodes)) {
  return {};
}

const processedLineItems = order.lineItems.nodes.map(item => {

  const weightKg = item.weight || 0;
  const weightGrams = Math.round(weightKg * 1000);

  let shipping_category = "Domestic";
  let international_surcharge = 0;

  if (country !== "USA") {
    shipping_category = "International";
    international_surcharge = 20 + (5 * weightKg);
  }

  return {
    ...item,
    weight_grams: weightGrams,
    shipping_category,
    international_surcharge,
    shipping_country: country
  };
});

return { processedLineItems };
```
**Code Node Output**
```JSON
[
  {
    "_pair_index": 0,
    "processedLineItems": [
      {
        "id": "gid://shopify/LineItem/17761653424437",
        "sku": "AB5353",
        "weight": 3.55,
        "quantity": 1,
        "title": "Armani Boots",
        "name": "Armani Boots",
        "originalUnitPriceSet": {
          "presentmentMoney": {
            "amount": "34343.43"
          }
        },
        "taxLines": [
          {
            "title": "CGST",
            "rate": 0.1,
            "priceSet": {
              "presentmentMoney": {
                "amount": "3434.35"
              }
            }
          },
          {
            "title": "IGSTKA",
            "rate": 0.091,
            "priceSet": {
              "presentmentMoney": {
                "amount": "3125.25"
              }
            }
          }
        ],
        "weight_grams": 3550,
        "shipping_category": "International",
        "international_surcharge": 37.75,
        "shipping_country": "India"
      },
      {
        "id": "gid://shopify/LineItem/17761653457205",
        "sku": "LB343",
        "weight": 4.44,
        "quantity": 1,
        "title": "Leather Boots",
        "name": "Leather Boots",
        "originalUnitPriceSet": {
          "presentmentMoney": {
            "amount": "343.43"
          }
        },
        "taxLines": [
          {
            "title": "CGST",
            "rate": 0.1,
            "priceSet": {
              "presentmentMoney": {
                "amount": "34.34"
              }
            }
          },
          {
            "title": "IGSTKA",
            "rate": 0.091,
            "priceSet": {
              "presentmentMoney": {
                "amount": "31.25"
              }
            }
          }
        ],
        "weight_grams": 4440,
        "shipping_category": "International",
        "international_surcharge": 42.2,
        "shipping_country": "India"
      }
    ]
  }
]
```

> Below is a sample **Shipstation** output payload:

<div
  style={{
    maxHeight: '350px',
    overflow: 'auto',
    border: '1px solid #ddd',
    padding: '12px',
    borderRadius: '6px'
  }}
>
<pre>
<code>
```JSON
[
  {
    "gift": false,
    "items": [
      {
        "sku": "AB5353",
        "upc": null,
        "name": "Armani Boots",
        "weight": {
          "units": "grams",
          "value": 3560,
          "WeightUnits": 2
        },
        "options": [],
        "imageUrl": null,
        "quantity": 1,
        "productId": 20813116,
        "taxAmount": null,
        "unitPrice": 34343.43,
        "adjustment": false,
        "createDate": "2026-02-23T04:08:11.797",
        "modifyDate": "2026-02-23T04:08:11.797",
        "lineItemKey": "AB5353",
        "orderItemId": 1402512541472,
        "fulfillmentSku": null,
        "shippingAmount": null,
        "warehouseLocation": null
      }
    ],
    "billTo": {
      "city": "Mumbai",
      "name": "John",
      "phone": null,
      "state": "MH",
      "company": null,
      "country": "IN",
      "street1": "Test Street",
      "street2": null,
      "street3": null,
      "postalCode": "400001",
      "residential": null,
      "addressVerified": null
    },
    "shipTo": {
      "city": "Mumbai",
      "name": "John",
      "phone": null,
      "state": "MH",
      "company": null,
      "country": "IN",
      "street1": "Test Street",
      "street2": null,
      "street3": null,
      "postalCode": "400001",
      "residential": false,
      "addressVerified": "Address validation warning"
    },
    "tagIds": null,
    "userId": null,
    "weight": {
      "units": "ounces",
      "value": 125.58,
      "WeightUnits": 1
    },
    "orderId": 243325993,
    "orderKey": "NW-US-1388",
    "shipDate": null,
    "orderDate": "2026-02-23T04:03:16.0000000",
    "taxAmount": 0,
    "amountPaid": 0,
    "createDate": "2026-02-23T04:08:11.8900000",
    "customerId": null,
    "dimensions": null,
    "modifyDate": "2026-02-23T04:11:54.8800000",
    "orderTotal": 34381.23,
    "shipByDate": null,
    "_pair_index": 0,
    "carrierCode": null,
    "giftMessage": null,
    "orderNumber": "7234327052597",
    "orderStatus": "awaiting_shipment",
    "packageCode": "package",
    "paymentDate": null,
    "serviceCode": null,
    "confirmation": "none",
    "customerEmail": null,
    "customerNotes": null,
    "holdUntilDate": null,
    "internalNotes": null,
    "labelMessages": null,
    "paymentMethod": null,
    "shippingAmount": 37.8,
    "advancedOptions": {
      "source": null,
      "storeId": 3768999,
      "parentId": null,
      "mergedIds": [],
      "billToParty": null,
      "warehouseId": null,
      "customField1": null,
      "customField2": null,
      "customField3": null,
      "billToAccount": null,
      "mergedOrSplit": false,
      "nonMachinable": false,
      "containsAlcohol": false,
      "billToPostalCode": null,
      "saturdayDelivery": false,
      "billToCountryCode": null,
      "billToMyOtherAccount": null
    },
    "customerUsername": null,
    "insuranceOptions": {
      "provider": null,
      "insuredValue": 0,
      "insureShipment": false
    },
    "externallyFulfilled": false,
    "internationalOptions": {
      "contents": "merchandise",
      "nonDelivery": "return_to_sender",
      "customsItems": [
        {
          "value": 34343.43,
          "quantity": 5,
          "description": "Armani Boots",
          "customsItemId": 43659052,
          "countryOfOrigin": "US",
          "harmonizedTariffCode": ""
        }
      ]
    },
    "externallyFulfilledBy": null,
    "externallyFulfilledById": null,
    "requestedShippingService": null,
    "externallyFulfilledByName": null
  }
]
```
</code>
</pre>
</div>

</TabItem>

</Tabs>
 

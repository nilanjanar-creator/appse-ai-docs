---
slug: /platform/key-concepts/nodes/trigger/on-schedule
title: On Schedule Trigger
position: 3
---
# On Schedule Trigger

The **On-Schedule** node helps you automate when your workflow runs — whether it’s every few minutes, daily, weekly or on a specific date and time.  
It acts as your workflow’s **internal timer**, allowing **appse ai** to handle recurring actions automatically.

You’ll find this node under **Triggers** when adding a trigger to your workflow.

## Configure Your Schedule

When you open the **On-Schedule** node, under **Trigger Frequency**, you’ll see **Mode**, where you define how often your workflow should run.

### Available Modes

Each mode defines how frequently your workflow should run. When you select a mode, **appse ai** automatically updates the available fields to match your scheduling needs.

#### 1. Minutes

<img src="\img\platform\key-concepts\nodes\triggers\on-schedule\minutes.png" alt="appse ai on schedule minutes" width="500"/>

Use this when you want your workflow to run every few minutes.  
You’ll specify:
- **Minutes between triggers** – set how many minutes apart each run should be. 

> This option is ideal for frequent syncs or monitoring tasks.


#### 2. Hours

<img src="\img\platform\key-concepts\nodes\triggers\on-schedule\hours.png" alt="appse ai on schedule hours" width="500"/>

Use this to run your workflow at regular hourly intervals.  
You’ll specify:
- **Hours between triggers** – how many hours to wait before the next run.  
- **Trigger at minute** – choose the exact minute within each hour when it should trigger. 
 
> Perfect for hourly reports, updates, or data refreshes.


#### 3. Days

<img src="\img\platform\key-concepts\nodes\triggers\on-schedule\days.png" alt="appse ai on schedule days" width="500"/>

Choose this to schedule daily or multi-day intervals.  
You’ll specify:
- **Days between triggers** – how many days to skip between each run.  
- **Trigger at hour and minute(s)** – the exact time of day the workflow should run.

> Best suited for daily summaries, cleanup routines, or scheduled notifications.

#### 4. Weeks

<img src="\img\platform\key-concepts\nodes\triggers\on-schedule\weeks.png" alt="appse ai on schedule weeks" width="500"/>

Use this to schedule workflows on specific weekdays.  
You’ll specify:
- **Trigger on weekdays** – select one or more days of the week.  
- **Trigger at hour and minute(s)** – choose what time on those days the workflow should run.

> Ideal for weekly maintenance or reporting tasks.

#### 5. Months

<img src="\img\platform\key-concepts\nodes\triggers\on-schedule\months.png" alt="appse ai on schedule months" width="500"/>

This option runs your workflow monthly or at specific month intervals.

You’ll specify:
- **Months between triggers** – how many months to skip between each run.  
- **Trigger at day of month** – the specific day in the month when the workflow should trigger.  
- **Trigger at hour and minute(s)** – the time of day for execution.

> Note: If the selected day doesn’t exist in a given month, the workflow will skip that month.

Useful for monthly billing, statements, or reports.


#### 6. Custom CRON Expression

<img src="\img\platform\key-concepts\nodes\triggers\on-schedule\cron.png" alt="appse ai on schedule cron" width="500"/>

For advanced scheduling, select this mode to define exact timing using a **CRON expression**.  
You’ll specify:
- **Expression** – a five-field CRON pattern in the format: [Minute] [Hour] [Day of Month] [Month] [Day of Week]

> Example: `0 9 10 * *` - runs the workflow on the 10th day of every month at 9 AM.  

This mode offers full flexibility for complex timing patterns like “every weekday at 5 PM” or “every 20 minutes on weekends”. Learn more about CRON expressions [here](https://crontab.cronhub.io/).

> Note: This node does **not** require any credentials to operate.

---

## Viewing Output

Once configured, open the **Output** tab to check your setup.

Click **Run once** to manually execute the node — this helps confirm that your workflow runs as expected.

When triggered (manually or automatically), the node produces a **payload with a timestamp** that can be used by the next node.

<img src="\img\platform\key-concepts\nodes\triggers\on-schedule\output.png" alt="appse ai on schedule output" width="700"/>

---

## Why Use the On-Schedule Node

If you want your workflow to start on a specified time interval, then use this node.

Use it when you want **appse ai** to take care of timing.  
A few common reasons to use it:

- Run a data sync every few hours.  
- Send a summary report each morning.  
- Perform a weekly cleanup every Friday.  
- Generate monthly invoices on the first of each month.

Once configured and activated, **appse ai** will trigger your workflow exactly as scheduled.

---
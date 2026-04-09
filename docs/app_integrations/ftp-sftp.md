---
title: "FTP SFTP"
slug: /app-integrations/ftp-sftp/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

FTP (File Transfer Protocol) and SFTP (Secure File Transfer Protocol) are standard protocols used to transfer files between systems over a network. With **appse ai**, you can securely connect to FTP/SFTP servers, automate file operations, and seamlessly integrate file management into your workflows.

---

## Setup Credential

Follow the steps below to configure your FTP/SFTP credential.

---

## Authentication Modes

<Tabs>

<TabItem value="sftp" label="SFTP">

SFTP (SSH File Transfer Protocol) provides secure file transfer over SSH.

### Required Fields

| Field | Description |
|------|------------|
| Connection Name | A unique name to identify this credential |
| Host | The hostname or IP address of the SFTP server |
| Port | Port number for SFTP (default: 22) |
| Username | Username for authentication |
| Password | Password for authentication |
| Timeout (seconds) | Maximum time to wait before connection timeout |

</TabItem>

<TabItem value="ftp" label="FTP / FTPS">

FTP/FTPS allows both unsecured and TLS-secured file transfer. Make sure that **connection mode is Passive**.

### Required Fields

| Field | Description |
|------|------------|
| Connection Name | A unique name to identify this credential |
| Host | The hostname or IP address of the FTP server |
| Port | Port number (21 for FTP/Explicit, 990 for Implicit) |
| Username | Username for authentication |
| Password | Password for authentication |
| Encryption Mode | Defines security level:<br />• None → Plain FTP<br />• Explicit → FTPS using AUTH TLS (port 21)<br />• Implicit → FTPS over dedicated TLS (port 990) |
| Validate Certificate | • True → Reject untrusted certificates (recommended)<br />• False → Accept self-signed certificates (dev only) |
| Timeout (seconds) | Maximum time to wait before connection timeout |

</TabItem>

</Tabs>

---

## FTP / SFTP Actions

There are **9 actions**, grouped into categories:

### Folder Actions
1. [List Directory](#1-list-directory)  
2. [Create Directory](#2-create-directory)  
3. [Move Folder](#3-move-folder)  

### File Actions
4. [Download File](#4-download-file)  
5. [Upload File](#5-upload-file)  
6. [Move File](#6-move-file)  

### File & Folder Actions
7. [Get File/Folder Info](#7-get-filefolder-info)  
8. [File/Folder Exists](#8-filefolder-exists)  
9. [Delete File/Folder](#9-delete-filefolder)  

---

## 1. List Directory

Lists all files and folders in a specified remote directory.

### Configuration Fields

| Field | Description |
|------|------------|
| Remote Path | Full remote directory path (e.g. `/uploads`, `/home/user/files`) |

### Example Input
<img src="\img\credentials\ftp-sftp\ftp1.png"  width="700"/>

### Example Output
<img src="\img\credentials\ftp-sftp\ftp2.png"  width="700"/>

---

## 2. Create Directory

Creates a new directory at the specified remote path.

### Configuration Fields

| Field | Description |
|------|------------|
| Remote Path | Full remote path where directory should be created |

### Example Input
<img src="\img\credentials\ftp-sftp\ftp3.png"  width="700"/>

### Example Output
<img src="\img\credentials\ftp-sftp\ftp4.png"  width="700"/>

---

## 3. Move Folder

Moves a folder from one location to another.

### Configuration Fields

| Field | Description |
|------|------------|
| Source Path | Full path of the folder to move |
| Destination Path | Full path where the folder should be moved |

### Example Input
<img src="\img\credentials\ftp-sftp\ftp5.png"  width="700"/>

### Example Output
<img src="\img\credentials\ftp-sftp\ftp6.png"  width="700"/>

---

## 4. Download File

Downloads a file from the remote server.

### Configuration Fields

| Field | Description |
|------|------------|
| Remote Path | Full path of the file to download |
| Output Format | Determines how the downloaded file content is returned:<br /><br />|

**Note**: <br/>
• **Auto** → Automatically detects the file type and formats the output accordingly:<br />
&nbsp;&nbsp;&nbsp;&nbsp;– **Text files** (e.g., `.txt`, `.xml`, `.css`, `.html`, `.js`) → Returned as plain UTF-8 string content<br />
&nbsp;&nbsp;&nbsp;&nbsp;– **JSON files** → Parsed and returned as a JSON object<br />
&nbsp;&nbsp;&nbsp;&nbsp;– **Binary files** (e.g., `.pdf`, `.jpg`, `.png`, `.jpeg`, `.xls`, `.xlsx`, `.doc`, `.docx`) → Returned as Base64-encoded string<br />
• **Base64** → Forces the system to return file content as a Base64-encoded string regardless of file type 

### Example Input
<img src="\img\credentials\ftp-sftp\ftp7.png"  width="700"/>

### Example Output
<img src="\img\credentials\ftp-sftp\ftp8.png"  width="700"/>

---

## 5. Upload File

Uploads a file to the remote server.

### Configuration Fields

| Field | Description |
|------|------------|
| Remote Path | Full destination path including file name |
| File Content | File content as Base64 encoded string |
| Overwrite | True to replace an existing file |

### Example Input
<img src="\img\credentials\ftp-sftp\ftp9.png"  width="700"/>

### Example Output
<img src="\img\credentials\ftp-sftp\ftp10.png"  width="700"/>

---

## 6. Move File

Moves a file from one location to another.

### Configuration Fields

| Field | Description |
|------|------------|
| Source Path | Full path of the file to move |
| Destination Path | Full destination path |
| Overwrite | True to replace existing file |

### Example Input
<img src="\img\credentials\ftp-sftp\ftp11.png"  width="700"/>

### Example Output
<img src="\img\credentials\ftp-sftp\ftp12.png"  width="700"/>

---

## 7. Get File/Folder Info

Retrieves metadata for a file or folder.

### Configuration Fields

| Field | Description |
|------|------------|
| Remote Path | Full path of the file or folder |

### Example Input
<img src="\img\credentials\ftp-sftp\ftp13.png"  width="700"/>

### Example Output
<img src="\img\credentials\ftp-sftp\ftp14.png"  width="700"/>

---

## 8. File/Folder Exists

Checks if a file or folder exists at a given path.

### Configuration Fields

| Field | Description |
|------|------------|
| Remote Path | Full path to check |

### Example Input
<img src="\img\credentials\ftp-sftp\ftp15.png"  width="700"/>

### Example Output
<img src="\img\credentials\ftp-sftp\ftp16.png"  width="700"/>

---

## 9. Delete File/Folder

Deletes a file or folder from the remote server.

### Configuration Fields

| Field | Description |
|------|------------|
| Remote Path | Full path of file or folder to delete |

### Example Input
<img src="\img\credentials\ftp-sftp\ftp17.png"  width="700"/>

### Example Output
<img src="\img\credentials\ftp-sftp\ftp18.png"  width="700"/>

---

## Support

Need help? Contact our support team at hello@appse.ai

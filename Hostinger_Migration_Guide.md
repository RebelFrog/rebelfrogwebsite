# Hostinger Website Migration Guide

This guide provides step-by-step instructions to migrate your RebelFrog website project from your local machine to your Hostinger hosting account, making it live at `https://rebelfrog.tech/`.

**Important Note:** The "Economic Updates" banner will **continue to work** even after you move the site. It is designed to fetch its data from your public Firebase Cloud Function, which is completely independent of where the website files are hosted.

---

### **Step 1: Locate and Prepare Your Website Files**

1.  On your computer, navigate to your project directory:
    `C:\Users\deanm\aigeminiproject\rebelfrogwebsite\`

2.  Open the `public` folder. This folder contains your entire website.

3.  Inside the `public` folder, select all the files and folders (you can press **Ctrl + A**).

4.  Right-click on the selected files, go to **Send to**, and then choose **Compressed (zipped) folder**. This will create a single `.zip` file (e.g., `public.zip`) containing your entire website.

### **Step 2: Access Your Hostinger File Manager**

11. Log in to your Hostinger account (hPanel).
12. On your main dashboard, find your `rebelfrog.tech` domain and click the **"Manage"** button next to it.
13. In the left sidebar or on the main screen, find and click on **"File Manager"**.

### **Step 3: Upload and Extract Your Website**

1.  Once inside the File Manager, you will see a list of files and folders. Double-click on the `public_html` folder to enter it. This is the root directory for your website.

2.  **(Recommended)** If there are any existing files or folders inside `public_html` from your old website, it's best to delete them to avoid conflicts. You can select them and use the "Delete" icon.

3.  In the top-right menu of the File Manager, find and click the **"Upload"** icon.
    *   Select the `.zip` file you created in Step 1 and upload it.

4.  Once the upload is complete, you will see your `.zip` file inside `public_html`. Right-click on it and select **"Extract"** or find an "Extract" icon in the menu.

5.  A dialog will ask where to extract the files. Confirm that you want to extract them directly into the `public_html` directory.

### **Step 4: Verify Your New Website**

1.  Open your web browser and go to **https://rebelfrog.tech/**.
2.  You may need to do a **hard refresh** (**Ctrl + Shift + R** or **Cmd + Shift + R**) or clear your browser cache to see the new website instead of the old one.

---

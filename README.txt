[INSTALLATION]
Basically, there is installation needed.
To run this program locally, you can simply open the index.html 
in the root directory via “Firefox or Safari”. And you are all set.

However, if you are using Chrome, the program will not be executed locally 
because it does not allow local AJAX request for the program to load template files. 
Therefore, to get it run, you have two ways to work around:

a) Set up a local web server on your machine. Then, make your server serve the project folder 
   as root directory or sub-directory. Once you are done, just open your Chrome and 
   try http://your-local-domain/.

b) The second way is adding an argument to your chrome forcing it allow local AJAX request.  
   
   Step 1. Open the AppleScript editor ( Applications > Utilities > AppleScript Editor )

   Step 2. Paste this line into the editor:
           do shell script "open '/Applications/Google Chrome.app' --new --args -allow-file-access-from-files"

   Step 3. Click Compile.

   Step 4. While in the editor, File > Save As > ‘ChromeDev’. Make sure the file format is ‘Application’.

   Step 5. Open your finder window to wherever you saved the compiled script and drag it to our dock.

   Step 6. Have fun with local AJAX calls

   Step 7. Just open index.html in the root directory via Chrome.
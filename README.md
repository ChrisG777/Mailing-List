# Mailing-List

This project is for connecting a google form to a contact group in Google Contacts, so that when someone fills out the form, it automatically adds the email to the contact group. 

1. Make a Google Form (or take an existing Google Form). Turn on “Collect Emails” in the form settings, and have a question for “First Name” and a question for “Last Name”. You should make these required questions (see slider on the bottom of the question)
![Collect Emails On](https://i.ibb.co/LdkC5nL/Fig-1-collect-emails-on.png)
2. Go into Google Contacts and create a label for your new mailing list
3. Add yourself to this mailing list.
4. Create the attached spreadsheet to your form
![Attached Spreadsheet](https://i.ibb.co/Zd5YZgt/attached-spreadsheet.png)
5. Go to Apps Script on your spreadsheet: this is under extensions on the top menu of the spreadsheet
6. Paste the code from Code.gs into the apps script. 
7. Go back into Google Contacts and click on the label you created. Copy the part of the url after label/ and before ?hl=en. Now paste this after contactGroups/ on line 10 of the code.
![Part 1: getting the contact group](https://i.ibb.co/ryB9LzP/contactgroupid.png)
![Part 2: inputting the contact group](https://i.ibb.co/MN7kj3H/input-group-id.png)
8. On the left, click the + next to Services. Scroll and click on Peopleapi, and press Add.
9. Click on triggers on the left. Click add trigger in the bottom right
![Triggers](https://i.ibb.co/PhGwZ6z/trigger.png)
10. Change the function to run on to formSubmitted and the event type to On form submit
![Trigger Settings](https://i.ibb.co/pR1Y7yn/trigger-settings.png)
11. A pop up should appear: click on your google account. Next, click on Advanced in the bottom right corner, then Go to ____ (unsafe)
![Verify App](https://i.ibb.co/XpwsLqB/verify-app.png)
12. You’re pretty much done! Now just get the link to the google form by pressing send and going to the second tab.
![Send the form](https://i.ibb.co/3fGhNR1/send-form.png)

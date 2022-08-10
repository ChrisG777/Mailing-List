function formSubmitted(e) {
  putInContact(e.namedValues);
}
 
function putInContact(info) {
  var firstName = info["First Name"][0];
  var lastName = info["Last Name"][0];
  var email = info["Email Address"][0];
  var groupresourceName = 'contactGroups/';
  var resourceName;
  var contact = People.People.searchContacts({query: email, readMask: ['emailAddresses']});
  var isEmpty = true;
  for (var i in contact)
  {
    isEmpty = false;
    break;
  }
  if(isEmpty)
  {
    console.log("Making the contact");
    contact = People.People.createContact({"emailAddresses": [ {"value": email} ], "names": [ {"givenName": firstName, "familyName": lastName} ]});
    resourceName = contact["resourceName"];
    Utilities.sleep(20000);
    var output = People.ContactGroups.Members.modify({"resourceNamesToAdd": [resourceName]}, "contactGroups/myContacts");
    console.log(output);
  }
  else
  {
    resourceName = contact["results"][0]["person"]["resourceName"];
  }
  console.log(resourceName);
  var ourGroup = People.ContactGroups.get(groupresourceName, {"maxMembers": 1000});
  var flag = true;
  for (var i of ourGroup.memberResourceNames)
  {
    if (resourceName == i)
    {
      flag = false;
      break;
    }
  }
  if (flag)
  {
    console.log("We're adding to the group");
    var output = People.ContactGroups.Members.modify({"resourceNamesToAdd": [resourceName]}, groupresourceName);
    console.log(output);
  }
} 
 

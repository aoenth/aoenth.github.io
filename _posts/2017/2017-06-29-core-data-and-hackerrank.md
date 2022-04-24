---
title: "Core Data and HackerRank"
date: "2017-06-29T01:56:47Z"
---

Hello there! Welcome to another blog post of Kevin's Journey to become a great iOS developer! In the past two days I have been learning more about Core Data and how it is implemented in the most basic form.

A lecture with 73 slides has taught me that Core Data is an object-oriented database, meaning everything is an object with properties and relationships to other objects. It is backed by SQL and sometimes in XML. Some key concepts are:

- NSManagedObjectContext - the hub around which all Core Data activity turns
- UIManagedDocument - provides mechanism for management of storage
- NSFileManager - used to read and write at a specific url path
- NSNotification - watching a document's managedObjectContext

Once an `NSManagedObjectContext` is all set up, the following line is used to insert new objects:

```objc
[NSEntityDescription insertNewObjectForEntityForName: inManagedObjectContext:]
```

Entities' attributes can be accessed using dot notation, even for relationships! For example, I have a `photo` and a `photographer`, I can simply write `photo.whoTook.name` to get the photographer's `name` even I'm working with an instance of `Photo`.

To delete an object, simply:

```objc
[aDocument.managedObjectContext deleteObject: photo]
```

And everything will be saved once `saveContext()` is called.

#### Querying

To query from Core Data: here is some sample code, assuming you have an entity saved as "Photo":

```objc
NSFetchRequest *request = [NSFetchRequest fetchRequestWithEntityName:@"Photo"];
 
request.fetchBatchSize = 20;
 
request.fetchLimit = 100;
 
request.sortDescriptors = @[sortDescriptor];
 
request.predicate...;
```

`FetchRequest`s can also be sorted before presenting them to the user. This is where the `NSSortDescriptor` comes in:

```objc
NSSortDescriptor *sortDescriptor = [NSSortDescriptor sortDescriptorWithKey: @"title" ascending: YES selector: @selector(localizedStandardCompare:)];
```

The predicate "`NSPredicate`" is where the advanced querying comes in, something like SQL, but like another language. Here is an example:

```objc
NSString *serverName = @"flickr-5";
 
NSPredicate *predicate = [NSPredicate predicateWithFormat:@"thumbnailURL contains %@", serverName];
```

You can also use `NSCompoundPredicate` to do some really advanced querying.

Finally, I have been doing some HackerRank challenges! Here is my GitHub project written in Swift: [HackerRank](https://github.com/aoenth/HackerRank)

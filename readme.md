# About the project
This project is inteded to be somehow "small", since it works as proof of concept that will allow me to understand how
store and retrieve wysiwyg data while implementing interesting practices regarding the use of decorators, DI containers, etc.

## Motivation
I've trying to learn how to "optimize" the structure of my express projects for a quile a while now, in order to apply
interesting concepts like DI (dependency injection), different design patterns and other practices that may bring an interesting level of abstraction to the overall express ecosystem.

On the otherhand, I also wanted to play around with some interesting technologies that I haven't been able to use on my day-to-day basis. When it comes to the backend some of those technologies are:
* __Prisma__: Prisma is kinda the new kid on the block when it comes to ORMs in the JS ecosystem. However, its abstractions are really interesting and its whole functionality (from queries, to migrations, and mapping) reminds of solid ORMs like Ecto (Elixir) and Eloquent (PHP).
* __reflect-metadata__: I've briefly worked with reflection before (mostly on C#) and I didn't thought I would find a cool use case for it on TS, until I started to dig into __decorators__. I've been working with __Flask__ for almost 8 months by now, and along that time I learned how to create __decorators__ and __decorator factories__ in order to easily extend the functionality of my controllers, so I said to myself "I should try to do the same on TS". After some research, I noticed that __reflect-metadata__ could be usefull, so I decided to give it a shot.  
* __typedi__: While learning about __reflect-metadata__ I discovered __typedi__, a DI container that's pretty dynamic when
it comes to resolving type requirements. It kinda reminded me of __Autofac__ (.Net) and that's the main reason why it caught my eye.

I've learned a lot until now, so I really hope that everyone that may find this repo also learns a thing or two C;
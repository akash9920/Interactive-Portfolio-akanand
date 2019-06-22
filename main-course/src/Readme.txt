npm install -g @angular/cli

to create a component

ng g component <name> [options]

declaring a declarator

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

installing angular material

ng add @angular/material



create you r components in app folder, so create a new subfolder to group components

all the component created must be addeded to the app.modules, import the class and add the reference to the ngModule.


Listening events : add event listeners , like this ---->>> (click)="name of the method", its good to start you method name with options

declare a variable in .ts,

and access it like this.nameofvariable
to use the variable in html pafe use string interpolation which is --->>>  {{ }},
other way to prepopulate

property binding-- >>  [value]= "the proerty/ var name or single qoutes with string/int etc".,  also craeting a local refrence using #someName and then pass it to the method in html page....

ex of above-- >>

<tesxtarea rows= "6"  [value] = "thePost"  #lovalVarPost>

<button (click) = "onMethodName(localVar)">

the above is one way, another is two way binding

----------->>>> TwoWay Binding
we can use one more thing that is called 2way binding---  using ngModeule

ngModule is an instruction you placed on the html element and bind it to some propeorty from class

you need to add to app.module.ts as its a FormModule


<tesxtarea rows= "6"  [(ngModel)] ="someProperty" >

use someProper in class to change some values or manupulating some variable in Strin Manupulator

<button (click) = "onMethodName()">

now install angular material --------->>>

use form inputs... since angular dont import every module by default so  just import MathInputModule in app.module.ts, it unlock all input related components

this goes into imports array???
wrap the coponent in some :::
also add MatCardModule ----->> also look how to add the module


wrap following with

level 1  -- >><mat-card>
level 2 --->> <mat-form-field>

edit wrapper using css

like

mat-card {

  width: 80%;
  margin: auto
}

mat-form-field,
text area {

  width: 80%;
  margin: auto
}



<mat-card>
<mat-form-field>
<tesxtarea rows= "6"  [(ngModel)] ="someProperty" >
<mat-form-field>
<button mat-raised-button
color="primay"
(click) = "onMethodName()">
<mat-card>


note: just check why didnt wrapped button in mat-form-field?
as that is only for the inputs or what just try to experiement with that.



---- >>>> adding a toolbar
the header is way diff and do not comes under the category of posts

add header component,
use MatToolBarModule,

class reference goes into declarations, and new module goes into imports

after adding header, put the app post create cmpoenent in main and using css addd somem argin from the top



POSTLIST COMPONENT

create similarly, we will use extensntion panel here,

usiong the official docs create, follow and give the titles and texts to expansion panel

for css add some margins and width auto, like commonly add to the main so that  both the things will be align

in css

: host targets the compoenent itself
:host {
  display :block,
  margin-top : 1rem
}


Now in postListCompoenent,

create an array of posts = [{key :   , value : },]


------- >>>>>>>>    Structural directives: fo dynamic loading of list, they are embedded function / code/ something, form
                                              from the example you will get the idea, like ngIf, ngFor.

ex :
<mat-accordian multi ="true" *ngIf = "some condition like length>0">
<mat-expansion-panel *ngFor="let post of posts"> where posts is the array we created in .ts file of class,
<mat-expansion-panel-header> some title  , {{post.title}}</>
<p> {{post.content}} </>

for text use matt-body-1

use the brackets accordingly

lets say we want to create the post using the our input we have entered,

one way we can do is by emtting what we have created using event emitter, so create as follows

varName = new EventEmitter();
then emit this var in the method where/when you wanna take action,
this.varName.emit(datayou wanna emit)

ex:
to make the angular aware about this eventbinfing property we use @Output declarator. similarly we gonna use input when we need to to an input
output as we are sending it.

fro outise== prent component whihc is app-component

@Output()
postCreated = new EventEmitter();

onAddPost(){

  do computation

  postCreated.emit(theresult of computation)

}

// in html prepopulate

in main html prepopulate
<main>

<app-post-create (postCreated) =  = "onPostAdded($event)"> </>

$event variable gives the access to all the data we are emitting using postCreated


// in root compoenent

we will store, using a method which is tied to event binder we created in post create

onPostAdded(post){

this.postStored.push(post);
// where postStored is an array declared roo app-component class/.ts

}


// in postList component we need to bind a property to the outside, since it will take input we will use Inout declarator
so we gonna use declarator @Input posts = [];

now in html thing we will do

[posts] = "storedPost" as the we are storing the posts in storedPost and lists posts array is using to populate the expansion panel.


so the chain so far is-->>>

you have a method from where you want to emit the data, just declare the declarator output, also create an event emiiter

using that you emit the output var/data. now in html create a method in app.module so that it can act as a mediator and pass the $event var
to that. in this way you can store the emitted data into a data structure;. lets say an array.
now use this stored array to update in the class where it wants to take the data.



now one observation, he has not emitted the stored post, as it accesing in html file like this

[posts] = "storedposts"

answer is we made it bindable by using the declarator @Input



--->>> as a part of good practice we should create models i.e Interface, which will act as a blueprint to follow


if you have defined a reference type lets say

export Interfacepost{

  title: String,
  content: String
}

now you can use this in other classes where we are using posts,

ex: storesPosts: Post[] = [];

similary declare the reference type where we are we are using , outputiing , importing , exporting data.

also we can mention this in event Emitter that what kind of data we want to emit.

ex: for event emitter
@Output postCreated = new EventEmitter<Post>();





------------------Now Here comes the Forms----------------

things will be a little different when we gonna use

when we are dealing witht he forms , awhat angular and JS does is they create a behind the scene objects, so we dont need to create a
two way binding

wrap it wround form tag, then  use the keyword ngModel, give them name.

also have a submit event for the form submit, also creating a local variable #postForm = "ngForm" will give us the acceess
to the form elements. since this variable stores the formdata like $event was storing the event data. no we can pass the form
data to the method onAddPost(postForm), the variable postForm in the method is of type of ngForm, so we need to make reference changes in the
corresponding methods like onAddPost(someVariable : ngForm)

now access the values of the forms using the someVariable likes this

xvariable   = someVariable.value.title ( where title is the name given to the  field of  the form in html page)

we can also use validators in the form so that it will only accept the some kind of values

ex : required, minlength

addingvalidation just give us red color thats it, but gonna submit the form, what we can use is if form is invalid then we will return.

ex: if (formVariable.invalid) return;

add some error messages using mat-error..

ngForm gives you the access to the form, ngModel gives you the access to the data we are enetring in the input, so this
can be used as variables

following is the form

<mat-card>
  <form (submit)="onAddPost(postForm)" #postForm="ngForm">
    <mat-form-field>
      <input
        matInput
        type="text"
        name="title"
        ngModel
        required
        minlength="3"
        #title="ngModel">
      <mat-error *ngIf="title.invalid">Please enter a post title.</mat-error>
    </mat-form-field>
    <mat-form-field>
      <textarea
        matInput
        rows="4"
        name="content"
        ngModel
        required
        #content="ngModel"></textarea>
      <mat-error *ngIf="content.invalid">Please enter a post title.</mat-error>
    </mat-form-field>
    <button
      mat-raised-button
      color="accent"
      type="submit">Save Post</button>
  </form>
</mat-card>

so above we used forms to store the datainstead of using 2way binding, rest is similar or same.


so what we did so far is use the template driven forms, and its really very good.

eventbinding is not good for the large projects, its cumbersome to use the event binding. so what we gonna do now is use services....!!


so create a SERVICE.....

------------>>>> someName.service.ts
it help ininjection, centralize some tasks, also its nothing but a class, provide a easy access to data without event
binding. so this thing more imp then event binding :D

in sevices we have defined a refreence type array, and getter and setter emthod to receive and access the values

[...this.posts] its a way of copying the orginal array and return it, its an inbuilt thing of ts/js/angular...


so to use the things defines in the services, we inject these services in the other classess...!!


steps to do that:
1) go to the class where youwant to use this service, create a constructor() {a method which is classed whenever we create an instance of the class}
2)


ex:

constructor(someVarName : PostsService){

}


example with a class, so the constructor will give us the dependency of the service, as its an inbuilt  stiff of angular,

Now we also create a reference type of the service so that we can store that dependency stuff.

ex: 2st way,

class comeClass {

somemVariable : someService; // a variable of type someService


constructor(someVar : someService){
this.somemVariable = someVar;
}

in this way the dependecy is stored in some variable so that it can be used in the class, other way of doing is by declaring
dependency public in the constructor.


constructor(public someVar : someService){
this.somemVariable = someVar;
}

2- waysssssssssssssssssssssssssssssss

NOTE: to make the angular aware  of the service, as it wont scan all the stuff, mention that stuff in the providers array.

or what you can do is go to the service class where we have declared the service, then mention  @Injectable

@Injectable({providedIn: 'root'})
export class someService {

}


what providedIn: 'root' will do is it will provide this on the root level and this only means that the angular should be able to find this
also one good thing it will does is it will create only one single instance

inservice we have defines add and get post method....

-------------------->>>> Now here comes the lil complex stuff called observable, since wehen we do add and create it doesnt update the post..... need to see this lecture again.

\subject from rxjx are event emitter but something for broader usage..... so just keep in mind and try to collect the things
which is needed to create the keyoard app.


similarity with event emitter,

somevar = EventEmitter<>(); ------------>>> someVariable = new Subject<sometype>();

somevar.emit() to emit------------------>>>> someVariable.next(what u wanna emit i.e data)

use lifecycle like onInit, ondestroy  which is a better practise to use

we are using onInit in postList, whenever the class implementing onInit it will automatically call this method


1st use
like in constructor,

onInit(){
  this posts. = this.PostsService.getPosts() // get post method is defined in the post service
}

for creatting

in method onAddPost(

  this.postService.addPost(var1,var2);
)

in abpve it wont give the list on UI aswer are fetcing before we update them, so the solution is we can just original array
rather then using a copy which isnt a good practise

note : delete declarator @input and @output we dont need that any more

2nd way is using event drive approach, ie giving the information to the class which is intersted in getting the information/data

so use rxjs--- >> observables

----->>> we are using them in service , # refer to the above comparison.




so in service addmethod we modify like this,

we are emitting this,

addPosts(){

  this.subjectObservableVariable.next([...this.posts])
}

now we need to listen to this subject

so define a method, like
call this method to get the listener

someMethod(){

  return this.subjectObservableVariable.asObservable();
}

so In class where we want to listen or do the thing or which want to get the data, we will subjectObservableVariable

ex:
inPostList


ngOnInit(){

  subscribe has three arguments here you can define what you want to do

  this.serviceVariable.getzListenerMethod().subscribe(


posts :Post[] => this.posts = posts;

  );
}



subscription has 3 arghuments
1) method exec upon call,
2) error
3) what to do when no more calls?

also we need to cancel the subscritpion to avoid memeory leak.

we do by like

by storing the above thing in a varSubscribe of type subscription and store the value

varSubscribe = posts :Post[] => this.posts = posts;


and then destroying this variable in onDestroy method

ngOnDestroy(){

  this.varSubscribe.unsubscribe();
}




---- >>> moving to node and express

do that in a seperate project or a seperate folder will also work

create a file server.js and app.js in backend directory





modules added so far:

angular material related

1) MathInputModule
2) MatCardModule
3) MatButtonModule
4) MatToolBarModule
5) MatExpansionModule





anyquestions doubts--- or todo

so generally what goies into improts array

what happens when you copy a reference type.....!!!

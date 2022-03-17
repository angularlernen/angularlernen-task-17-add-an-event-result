Add an Event
============

### Introduction

Let us provide a view for adding a new event to the collection of events.

### Task

1. Create a new component `event-create`: `ng g events/event-create`.

2. Add a routing configuration to this new component. The final path should be: `http://localhost:4200/events/create`

3. In this new component, we'd like to use Forms. Import the `FormsModule` into your `EventsModule`.

  Hint: TypeScript import: 

  `import { FormsModule } from '@angular/forms'`

3. Create a simple form in `event-create.component.html` with inputs for all required properties of an event:

  Hint: The required properties:
  ```ts
  title: string;
  shortDescription: string;
  eventDate: any;
  pictureUrl: string;
  ```
4. Give each `<input>` the `ngModel` _attribute directive_ and a name.

  It also makes sense to introduce a template reference variable.

  Example:
  ```html
    <input type="text" name="title" ngModel #title="ngModel">
  ```

5. Add a `<button type="submit">Add Event</button>` to your form.

6. Add a template reference variable for your form: `<form #addEventForm="ngForm">`.

7. Add a callback for the `(ngSubmit)` output on your form:

  `<form #addEventForm="ngForm" (ngSubmit)="addEvent(ngForm.value)">`

8. Inspect the value as received. Log it to the console.

9. Optional: Add validation.

### HOWTOs

#### event-collection.component.html

```html
<div class="row justify-content-end mt-4">
  <a [routerLink]="['create']" class="btn btn-default">Add Event</a>
</div>
```

#### validation

```html
<div class="form-group col-12 col-sm-8">
      <label for="title">Title</label>
      <input 
        type="text" 
        class="form-control" 
        id="title" 
        placeholder="Enter title" 
        name="title" 
        ngModel 
        required 
        minlength="5" 
        #title="ngModel" 
        [ngClass]="{ 'is-valid': title.valid && title.dirty, 'is-invalid': title.invalid && title.dirty }">
      
      <div *ngIf="title.errors?.required && title.dirty" class="invalid-feedback">
        The title is required
      </div>
      <div *ngIf="title.errors?.minlength && title.dirty" class="invalid-feedback">
        The title has to be at least <b>{{title.errors?.minlength.requiredLength}}</b> characters long. You gave us {{title.errors?.minlength.actualLength}}
      </div>
      <div *ngIf="title.valid" class="valid-feedback">
        Yeah... that's a catchy title ;-).
      </div>
    </div>
```

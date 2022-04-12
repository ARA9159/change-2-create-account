import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import { Validators,FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CREATE ACCOUNT';
  registerform:FormGroup;
  constructor(){
    this.registerform=new FormGroup({
      type:new FormControl(null,[Validators.required]),
      fname:new FormControl(null,[Validators.required]),
      lname:new FormControl(null,[Validators.required]),
      gname:new FormControl(null,[Validators.required]),
      age:new FormControl(null,[Validators.required,Validators.pattern('[0-9]{2}')]),
      dob:new FormControl(null,[Validators.required]),
      cnum:new FormControl(null,[Validators.required,Validators.pattern('[0-9]{10}')]),
      anum:new FormControl(null,[Validators.required,Validators.pattern('[0-9]+')]),
      eid:new FormControl(null,[Validators.required,Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]),
      npsw:new FormControl(null,[Validators.required,Validators.pattern('^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{8,}$')]),
      cpsw:new FormControl(null,[Validators.required,Validators.pattern('^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{8,}$')]),
      adres:new FormControl(null,[Validators.required]),
      place:new FormControl(null,[Validators.required]),
      code:new FormControl(null,[Validators.required,Validators.pattern('[0-9]{6}')])
    });
  }
  get type(){
    return this.registerform.get('type');
  }
  get fname(){
    return this.registerform.get('fname');
  }
  get lname(){
    return this.registerform.get('lname');
  }
  get gname(){
    return this.registerform.get('gname');
  }
  get age(){
    return this.registerform.get('age');
  }
  get dob(){
    return this.registerform.get('dob');
  }
  get cnum(){
    return this.registerform.get('cnum');
  }
  get anum(){
    return this.registerform.get('anum');
  }
  get eid(){
    return this.registerform.get('eid');
  }
  get npsw(){
    return this.registerform.get('npsw');
  }
  get cpsw(){
    return this,this.registerform.get('cpsw');
  }
  get adres(){
    return this.registerform.get('adres');
  }
  get place(){
    return this.registerform.get('place');
  }
  get code(){
    return this.registerform.get('code');
  }
  create(){
    console.log(this.registerform);
    return this.registerform.reset();
  }
}

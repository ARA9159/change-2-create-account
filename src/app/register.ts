export class Register{
    type:string;
    fname:string;
    lname:string;
    gname:string;
    age:number;
    dob:string;
    cnum:number;
    anum:number;
    eid:string;
    npsw:string;
    cpsw:string;
    adres:string;
    place:string;
    code:number;
    constructor(type:string,fname:string,lname:string,gname:string,age:number,dob:string,cnum:number,anum:number,eid:string,npsw:string,cpsw:string,adres:string,place:string,code:number){
        this.type=type;
        this.fname=fname;
        this.lname=lname;
        this.gname=gname;
        this.age=age;
        this.dob=dob;
        this.cnum=cnum;
        this.anum=anum;
        this.eid=eid;
        this.npsw=npsw;
        this.cpsw=cpsw;
        this.adres=adres;
        this.place=place;
        this.code=code;
    }
}
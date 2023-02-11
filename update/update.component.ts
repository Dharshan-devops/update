import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  
})
export class UpdateComponent implements OnInit {
  public data:any={}
  public datas:any={}
  public upddat:any={}
  public index:any;

  public test:any={
  }
  constructor(private auth:AuthenticateService) { }

  ngOnInit(): void {
    setInterval(()=>{
      this.get();
    },2000);
  }

  update(){
    console.log("Updated:",this.test)
    this.auth.getupdate(this.test).subscribe((res)=>{
      this.upddat=res
    })
  }

  get(){
    // console.log(this.data)
    this.auth.getdata(this.data).subscribe((res:any)=>{
      // console.log(res)
      this.datas=res

    })

  } 

  existdata(i:any){
    this.index=i;
    this.test=this.datas[i]
    console.log(this.test)
    // console.log(this.datas[i])
    this.auth.getdatanew(this.data).subscribe((res:any)=>{
      // console.log(res)
      this.datas=res
    })

  }


  remove(i:any){
    console.log("drop document:",this.datas[i])
    this.auth.delete(this.datas[i]).subscribe((res)=>{
      console.log("Data from server:",res)
    })

  }


  display = "none";
 
openModal(i:any) {
    this.display = "block";
    // console.log(this.datas[i])
  }
  onCloseHandled() {
    this.display = "none";
  }


  // fun(i:any){
  //   console.log(this.datas[i])
  // }


}

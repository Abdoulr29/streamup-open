export class synchronization{
 public  path=require('path');
 public  Rsync=require('rsync');
 public  os=require('os');
 public  robocopy=require('robocopy');
 public source:string;
 public destination:string;


constructor(){

if(this.os.platform() ==='darwin'){
    console.log("win32 oyee")
   
}
else{  
    // sync with rsync will execute on linux platform
    console.log("we are on darwin");
     var rsync=new this.Rsync()
          .shell('ssh')
          .flags('avr')
          .source(this.os.homedir())
          .destination(this.os.homedir());

    rsync.execute((err,code,cmd)=>{
        //execute...
        console.log(cmd);
        console.log(code);
        console.log(err);
    });
    

    
}

}

}
import {HttpClientService} from './services/http-client.service';
import {Mkdir as Dir} from './extensions/dir/mkdir';
import {Component,OnInit,ViewEncapsulation} from '@angular/core';
import electron = require('electron');
let {ipcRenderer} = electron;
let ipc = require('electron').ipcRenderer

@Component({
  selector: 'app-sbox',
  styleUrls: ['./sync.component.css'],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './sync.component.html',
  providers: [HttpClientService]
})

export class SyncComponent implements OnInit {
  isDarkTheme: boolean = false;
  sequelize:any;
  isAsideTaggled: boolean = false;
  selectDirBtn = document.getElementById('select-directory');
  isAsideTaggledCss: string ='margin-left:-15%';
  isAuthenticated: boolean = false;
  protected user: string;
  protected percent: number;
  protected file_shared: number;
  protected connections: number;
  dir = new Dir();
  constructor(private http: HttpClientService) {
    this.getUser();
    this.copyFolders();
  }
  openDir(){
    ipc.send('open-file-dialog')
  }
  authenticateNow(){
    this.isAuthenticated = (this.isAuthenticated === true? false: true);
  }
  openSettingModal(){
    ipc.send('openSettingModal');
  }
  copyFolders(): Promise < any > {
    
      return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.http.getFolders()
          .subscribe(res => {
            console.log(res);
            res.data.forEach(folder => {

              if (folder.parent === 0) {
                if (folder.has_copy === false) {
                  console.log(folder.name);
                  this.createFolder(folder.name);
                } else if (folder.has_copy === 0) {
                  this.createFolder(folder.name);
                }
              } else {
                //implement creating subFolder here
              }
            });
            resolve();
          });
      }, 0);
    });
  }
  download(uri: string, filename: string, callback: any) {
    
  }
  
  ngOnInit() {
    // (localStorage.getItem("isAuthenticated") !=null)?ipc.send("isNotAuthenticated"):return;
    //show login modal
    this.dir.create('Sbox');    
    // this.copyFolders().then((res) => {}).catch((error) => {});
    // this.downloadFiles();
    // this.download('http://localhost:8000/api/downloads/fileApi/3/0', 'name.png', function () {
    //     console.log('we have done downloading file');
    // });
  }
  downloadFiles(): Promise < any > {
    return new Promise((resolve, reject) => {
      setTimeout((res) => {

      }, 0);
    });
  }
  isAutoSync(toggle ? : boolean): boolean {
    return toggle = !toggle;

  }
  autoFetch() {

  }
  createFolder(name: String) {
    console.log('crreated dir'+ name);
    this.dir.create('Sbox/' + name);

  }
  getUser() {
    this.http.getUser().subscribe(res=>{
      return this.user = res.name;
    });
  }
  getDiskUsage() {
    return this.percent = 40;
  }
  getFileShared() {
    return this.file_shared = 80;
  }
  getConnections() {
    return this.connections = 400;
  }
  getFolders() {

  }

}

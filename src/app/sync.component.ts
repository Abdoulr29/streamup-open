import {
  HttpClientService
} from './services/http-client.service';
import {
  Mkdir as Dir
} from './extensions/dir/mkdir';
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
HttpClientService
import electron = require('electron');
const {
  ipcRenderer
} = electron;
const ipc = require('electron').ipcRenderer


var $ = require('../assets/js/jquery/dist/jquery.js');
@Component({
  selector: 'app-sbox',
  styleUrls: ['./sync.component.css'],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './sync.component.html',
  providers: [HttpClientService]
})

export class SyncComponent implements OnInit {
  isDarkTheme: boolean = false;
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
  }
  openDir(){
    
    ipc.send('open-file-dialog')
  }
  authenticateNow(){
    this.isAuthenticated = (this.isAuthenticated === true? false: true);
  }
  
  copyFolders(): Promise < any > {

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.http.getFolders()
          .subscribe(res => {

            res.forEach(folder => {

              if (folder.parent === 0) {
                if (folder.has_copy === 1) {
                  this.createFolder(folder.name + '(' + folder.copy_count + ')');
                } else if (folder.has_copy === 0) {
                  this.createFolder(folder.name);
                }
              } else {
                // this.http.getPath(folder.id)
                //   .subscribe(response => {
                //     var tmp = [];
                //     response.forEach(subfolder => {
                //       tmp.push(subfolder.name);
                //     });
                //     this.createFolder(tmp.join('/'));
                //   });
              }
            });
            resolve();

          });
      }, 0);
    });

  }
  download(uri: string, filename: string, callback: any) {
    //TODO set auth token on this download request 
    // request.head(uri, function (err, res, body) {

    //     request(uri).pipe(fs.createWriteStream(os.homedir() + '/Sbox/' + filename)).on('close', callback);


    // });

  }
  
  ngOnInit() {

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

    this.dir.create('Sbox/' + name);

  }
  getUser() {
     
     this.http.getUser().subscribe(res=>{
       
       
      return this.user = res.name;
    });
  }
  getDiskUsage() {
    //TODO make data-percent accept this value!
    //TODO how to create filter in angular2
    //TODO how to use state in angular 2
    //TODO how to use $uibModal or ui.bootstrap for angular 2 and start poping up modal
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

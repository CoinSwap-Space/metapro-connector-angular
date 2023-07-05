import { Component, OnInit } from '@angular/core';
import WalletConnect from '@walletconnect/client';

@Component({
  selector: 'app-root',
  template: ` <div>
    <h1>WalletConnect Example</h1>
    <button (click)="connect()">Connect</button>
    <div *ngIf="connector && connector.connected">
      <button (click)="disconnect()">Disconnect</button>
    </div>
    <div *ngIf="connector && connector?.uri && isConnecting">
      <p>Uri</p>
      <p>URI: {{ connector.uri }}</p>
      <img [src]="getQRCodeUrl()" alt="QR Code" />
    </div>
    <div *ngIf="connector">
      <p>Connected: {{ connector.connected }}</p>
    </div>
    <p>isConnecting: {{ isConnecting }}</p>
    <div
      *ngIf="connector && connector.accounts && connector.accounts.length > 0"
    >
      <p>Accounts: {{ connector.accounts }}</p>
    </div>
  </div>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'my-second-project';
  public connector: WalletConnect | null = null;
  public isConnecting: boolean = false;
  ngOnInit() {
    this.setupWalletConnect();
  }
  constructor() {}
  setupWalletConnect() {
    const connector = new WalletConnect({
      bridge: 'https://tst-bridge.metaprotocol.one',
      qrcodeModal: {
        open(uri) {},
        close() {},
      },
    });
    connector.on('disconnect', (error: Error | null) => {
      this.connector = null;
    });

    this.connector = connector;
  }
  async connect() {
    if (this.connector) {
      try {
        this.isConnecting = true;
        await this.connector.connect();
      } catch (err) {
        console.log(err);
      }
      this.isConnecting = false;
    }
  }
  getQRCodeUrl(): string {
    if (this.connector && this.connector.uri) {
      const encodedUri = encodeURIComponent(
        `metapro://wc?uri=${this.connector.uri}`
      );
      return `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodedUri}`;
    } else {
      return '';
    }
  }
  async disconnect() {
    if (this.connector) {
      await this.connector.killSession();
      this.connector = null;
    }
  }
}

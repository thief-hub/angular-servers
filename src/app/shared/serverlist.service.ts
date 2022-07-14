import { ServerModel } from '../server/server.model';

// TODO: tests ergänzen
export class ServerlistService {
  private servers: ServerModel[] = [];
  private nameIndex: string[] = [];

  getServers() {
    return this.servers;
  }

  getServerNames() {
    let nameIndex: string[] = [];
    for (let i = 0; i < this.servers.length; i++) {
      nameIndex[i] = this.servers[i].name;
    }

    return nameIndex;
  }

  createServer(name: string) {
    const server: ServerModel = {
      name: name,
      id: Date.now(),
    };
    this.servers.push(server);
  }

  changeName(name: string, newName: string) {
    this.servers[this.getServerNames().indexOf(name)].name = newName;
  }

  removeServer(id: number) {
    let index: number = 0;
    for (let i = 0; i < this.servers.length; i++) {
      if (this.servers[i].id === id) {
        index = i;
        this.servers.splice(index, 1);
        return;
      }
    }
  }
}

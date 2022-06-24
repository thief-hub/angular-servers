import {ServerModel} from "../server/server.model";

export class ServerlistService {
  private servers: ServerModel[] = [];

  getServers() {
    return this.servers;
  }

  createServer(name: string) {
    const server: ServerModel = {
      name: name,
      id: Date.now()
    }
    this.servers.push(server);
  }

  removeServer(id: number) {
    let index: number = 0;
    for (let i = 0; i < this.servers.length; i++) {
      if(this.servers[i].id === id) {
        index = i;
        this.servers.splice(index, 1)
        return;
      }
    }
  }
}

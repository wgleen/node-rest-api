import { bootstrap } from './app'
import cluster from 'cluster'
import os from 'os'

const numCPUs = os.cpus().length

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`)

  for (let i = 0; i < numCPUs; i++)
    cluster.fork()

    cluster.on('exit', (worker, code, signal) => {
      console.log(`worker ${worker.process.pid} died`)
      cluster.fork()
    })
} else {
  bootstrap({ port: 3000 }, () => {
    console.log(`Worker ${cluster.worker.id} running @ process ${cluster.worker.process.pid}!`)
  })
}
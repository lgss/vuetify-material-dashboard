/**
 * Mock client-server web service call for data
 */
const _metric = {
    "prospectToProject" : 0.9883720930232558
}
  
export default {
    getProspectToProject (cb) {
        setTimeout(() => cb(_metric), 100)
    }
}
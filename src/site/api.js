class Api {

    urlHost = 'http://localhost:9801';

    urlBasic = '/api'

    getMember = ()=>{
        return this.urlHost+this.urlBasic+'/member';
    }
}

export default Api;
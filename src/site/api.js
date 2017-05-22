class Api {

    urlHost = 'http://zhsngq.esy.es';

    urlBasic = '/source'

    getMember = ()=>{
        return this.urlHost+this.urlBasic+'/member';
    }

    getExperimentList = ()=>{
        return this.urlHost+this.urlBasic+'/experiment_list.php';
    }

    getExperimentNew = ()=>{
        return this.urlHost+this.urlBasic+'/experiment_new.php';
    }

}

export default Api;
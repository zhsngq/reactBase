class Tools {

    setData=(obj,$func)=>{
        obj['data'] = obj.this.state;
        $func(obj);
        obj.this.setState(obj.data);
    }
}

export default Tools;

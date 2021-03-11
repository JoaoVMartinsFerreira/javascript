(() => {
    this.name = 'arow function';
  
    const getNameArrowfn = () => this.name; 
    
    function getName() {
    return this.name;
    }

    const user = {
        name: 'Nome do objeto na execução',
        getNameArrowfn,
        getName


    }
    console.log(user.getNameArrowfn());
    console.log(user.getName());
})();

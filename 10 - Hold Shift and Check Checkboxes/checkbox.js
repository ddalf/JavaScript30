window.addEventListener('load', ()=>{
    const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
    let lastChecked;
    let inBetween = false;

    function handleCheck(e){
        if(e.shiftKey && this.checked){//shiftKey가 눌러진 상태이고 현재 요소 체크박스가 check 되어 있다면
            checkboxes.forEach(checkbox => {
                if(checkbox === this | checkbox === lastChecked){
                    inBetween = !inBetween;
                }
                if(inBetween){
                    checkbox.checked = true;
                }
            });
        }
        lastChecked = this;
    }

    checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
    
});
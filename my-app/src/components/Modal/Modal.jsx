function Modal(props) {
    
    if(props.isOpen) {
        return (
            <>
                <div class="modal-background">
                    <div class="modal">
                        <button onClick={props.closeModal}>X</button>
                        <p> Employee added</p>
                    </div>
                </div>

            </>
        )
    }
    else {
        return null
    }

}

export default Modal; 
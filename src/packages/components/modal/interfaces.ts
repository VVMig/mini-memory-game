export interface ModalProps extends IAnimation {
    handleModalClose: () => void;
    className?: string;
    stateClass?: string;
}

export interface IAnimation {
    delay?: number;
}
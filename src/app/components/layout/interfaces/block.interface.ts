export interface IBlock {
    key?: string;
    block_type?: string;
    id?: string;
    config?: any;
    blocks?: IBlock[]
}
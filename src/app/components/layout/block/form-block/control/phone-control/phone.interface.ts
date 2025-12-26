import { ILabel } from "../../partials/label/label.interface";

export interface IPhoneControl extends ILabel {
    show_countries: boolean,
    default_country: string,
}
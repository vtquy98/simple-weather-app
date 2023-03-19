import {
  DefaultPositionModel,
  LocationPositionModel,
} from "./LocationPositionModel";

export interface LocationModel {
  position: LocationPositionModel;
  country: string;
  locality: string;
}

export const defaultLocationModel = {
  position: DefaultPositionModel,
  country: "Ho Chi Minh City",
  locality: "VN",
};

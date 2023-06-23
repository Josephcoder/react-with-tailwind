export interface OwnerShipCount__Interface {
  ownership_type: string;
  total_school?: string;
  total_teachers?: string;
  total_students?: string;
}
export interface School__Interface {
  no?: number;
  id?: string;
  code: string;
  full_name: string;
  location_id?: string;
  short_name: string;
  ownership_type: string;
  allocation_size?: string;
  total_schools?: OwnerShipCount__Interface[];
  total_school_teachers?: OwnerShipCount__Interface[];
  total_school_students?: OwnerShipCount__Interface[];
}

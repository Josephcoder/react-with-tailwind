interface UserInfo__Interface {
  id: number;
  staff_id: string;
  staff_position_id: string;
  staff_location_id: string;
  staff_type: string;
  school_id: string;
  names: string;
  phone_number: string;
  email: string;
  ussd_pin: string | null;
}

export interface UserAuth__Interface {
  token: string;
  data: UserInfo__Interface;
}

export default interface Auth__Interface {
  token?: string;
  data?: UserInfo__Interface;
  username?: string;
  password?: string;
}

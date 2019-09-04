export class AlertMessage {
  status: 'primary' | 'success' | 'info' | 'warning' | 'danger';
  message: string;
}

export enum AccountStatus {
  INACTIVE = 'INACTIVE',
  ACTIVE = 'ACTIVE',
  SUSPENDED = 'SUSPENDED',
  BLACKLISTED = 'BLACKLISTED',
  NEW = 'NEW',
}

export enum ProfileGender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

export enum ProfileReligion {
  BUDDHA = 'BUDDHA',
  HINDU = 'HINDU',
  ISLAM = 'ISLAM',
  KONG_HU_CHU = 'KONG HU CHU',
  CHRISTIAN = 'CHRISTIAN',
  CATHOLIC = 'CATHOLIC',
}

export enum ProfileMaritalStatus {
  SINGLE = 'SINGLE',
  IN_RELATIONSHIP = 'IN RELATIONSHIP',
  MARRIED = 'MARRIED',
  DIVORCED = 'DIVORCED',
}

export enum TypeAcademy {
  SMA = 'SMA',
  SMK = 'SMK',
  D3  = 'D3',
  S1  = 'S1',
  S2  = 'S2',
}

export enum RegionType {
  PROVINCE = 'PROVINSI',
  REGENCY = 'KABUPATEN',
  KOTA = 'KOTA',
  DISTRICT = 'KECAMATAN',
  VILLAGE = 'KELURAHAN',
}

export enum TemplateType {
  MAIL = 'MAIL',
  SMS = 'SMS',
}

export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export enum ServiceType {
  PUBLIC = 'PUBLIC',
  BACKOFFICE = 'BACKOFFICE',
  FRONTOFFICE = 'FRONTOFFICE',
  PORTAL = 'PORTAL',
}

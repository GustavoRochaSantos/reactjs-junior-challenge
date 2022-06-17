export interface ClientInfo {
    id: string,
    name: string,
    company: string,
    email: string,
    phone?: string,
    address?: string,
    note?: string,
    isActive?: boolean
}

export interface CreateData {
    id: string,
    name: string,
    company: string,
    phone: string,
    email: string,
    isActive: boolean
  }
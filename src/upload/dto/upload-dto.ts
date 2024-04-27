
export type FileDTO = {
    fieldname: string
    originalname: string
    mimetype: string
    buffer: Buffer
    size: number
}


export type MasterImage = {
    name: string
    type: string
    image_name: string
    project_id: string
    player_visible: string 
}

export type PlayerImageProject = {
    name: string
    type: string
    image_name: string
    project_id: string
}
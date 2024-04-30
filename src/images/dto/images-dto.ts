export type ImagesDTO = {
    imageName: string
    id_project: string
    height: string
    width: string
    left: string
    top: string
}
export type MasterImage = {
    name: string
    type: string
    image_name: string
    project_id: string
    player_visible: boolean
    is_active: boolean
}

export type PlayerImageProject = {
    name: string
    type: string
    image_name: string
    project_id: string
}
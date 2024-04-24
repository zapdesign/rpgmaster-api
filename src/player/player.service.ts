import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { PlayerAcess } from './dto/player-dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class PlayerService {
    constructor(private readonly prisma: PrismaService) {}


    async findSection(id: string){
        const exist = await this.prisma.playerPage.findFirst({
            where: {
                project_id: id
            }
        })

        if(!exist){
            throw new Error(`Essa sessão não existe`)
        }

        return {...exist, password: undefined, id: undefined, created_at: undefined}
    }

    async findAllplayers(id: string){
        const players = await this.prisma.playerAcess.findMany({
            where: {
                project_id: id
            },
            select: {
                id: true,
                name: true,
                email: true,
                project_id: true,
              }
        })

        if(!players){
            return
        }

        return players
    }

    //

    async createPlayer(data: PlayerAcess){
        const exist = await this.prisma.playerAcess.findFirst({
            where: {
                email: data.email,
                project_id: data.project_id
            }
        }) 

        if(exist){
            throw new Error(`Esse email já está sendo utilizado`)
        }

        const projectPass = await this.prisma.playerPage.findFirst({
            where: {
                project_id: data.project_id
            }
        })

        const newUser = await this.prisma.playerAcess.create({
            data: {...data, password: projectPass.password}
        })

        await this.prisma.player.create({
            data: {
                name: newUser.name, 
                player_id: newUser.id,
                image: '',
                cultura_heroica: '',
                idade: '',
                padrao_de_vida: '',
                bencao_cultural: '',
                patrono: '',
                chamado: '',
                caminho_das_sombras: '',
                tesouro: '',
                caracteristicas_notaveis: '',
                falhas: '',
              
                forca_na: 0,
                forca_nivel: 0,
                forca_resistencia: 0,
              
                fascinio: false,
                fascinio_bool: 0,
                atletismo: false,
                atletismo_bool: 0,
                vigilancia: false,
                vigilancia_bool: 0,
                cacada: false,
                cacada_bool: 0,
                musica: false,
                musica_bool: 0,
                oficio: false,
                oficio_bool: 0,

                machados_bool: 0,
                arcos_bool: 0,
                lancas_bool: 0,
                espadas_bool: 0,
              
              
                coracao_na: 0,
                coracao_nivel: 0,
                coracao_resistencia: 0,

                inducao: false,
                inducao_bool: 0,
                viagem: false,
                viagem_bool: 0,
                discernimento: false,
                discernimento_bool: 0,
                cura: false,
                cura_bool: 0,
                cortesia: false,
                cortesia_bool: 0,
                batalha: false,
                batalha_bool: 0,
                
                recompensa: '',
                recompensa_valor: 0,
                

                astucia_na: 0,
                astucia_nivel: 0,
                astucia_resistencia: 0,

                persuasao: false,
                persuasao_bool: 0,
                furtividade: false,
                furtividade_bool: 0,
                busca: false,
                busca_bool: 0,
                exploracao: false,
                exploracao_bool: 0,
                enigma: false,
                enigma_bool: 0,
                historia: false,
                historia_bool: 0,
              
                virtudes: '',
                virtudes_sabedoria: 0,
              
                
                armadura: '',
                armadura_protecao: 0,
                armadura_carga: 0,
                
                elmo: '',
                elmo_protecao: 0,
                elmo_carga: 0,

                escudo: '',
                escudo_protecao: 0,
                escudo_carga: 0,


                pontos_de_aventura: 0,
                pontos_de_pericia: 0,
                pontos_de_sociedade: 0,

                carga_atual: 0,
                carga: 0,
                fadiga: 0,

                esperanca_atual: 0,
                sombra: 0,
                cicatrizes_sombra: 0,

                ferimento: '',
                tempo_ferimento: 0,

                exausto: false,
                arrasado: false,
                ferido: false,

                equipamento_de_viagem: ''
            }
        })

        await this.prisma.playerInventory.create({
            data: {
                player_id: newUser.id,
                equipamento_de_guerra: '',
                dano: 0,
                ferimento: 0,
                carga: 0,
                anotacao_equipamento: ''
            }
        })

        await this.prisma.comitiva.create({
            data: {
                player_id: newUser.id,
                project_id: data.project_id,
                ano: '',
                estacao: '',
                jornada_de: '',
                destino: '',
                dias_de_viagem: '',
                nome: '',
                papel: '',
                fadiga_da_viagem: 0,
                ponei_1: '',
                p1_vigor: 0,
                ponei_2: '',
                p2_vigor: 0,
                ponei_3: '',
                p3_vigor: 0,
                diario: ''
            }
        })

        return {
            ...newUser,
            password: undefined
        }
    }

    async updatePass(id: string, updateData: any){

        const hashedPass = await hash(updateData.password, 10)

        await this.prisma.playerPage.updateMany({
            where: {
                project_id: id
            },
            data: {...updateData, password: hashedPass}
        })

        await this.prisma.playerAcess.updateMany({
            where: {
                project_id: id
            },
            data:   {...updateData, password: hashedPass}
        })
    }

    async delAcess(id: string){

        const exist = await this.prisma.playerAcess.findUnique({
            where: {
                id
            }
        })

        if(!exist){
            throw new Error(`Usuário não existe.`)
        }

        await this.prisma.player.deleteMany({
            where: {
                player_id: id
            }
        })

        await this.prisma.playerInventory.deleteMany({
            where: {
                player_id: id
            }
        })

        await this.prisma.playerAcess.delete({
            where: {
                id
            }
        })
        
        return `Player apagado com sucesso.`
    }

    //Caracter
    async findCaracter(id: string){
        const caracter = await this.prisma.player.findFirst({
            where: {
                player_id: id
            }
        })        

        if(!caracter){
            return `Personagem não encontrado.`
        }

        return caracter
    }

    async updateCaracter(id: string, data: any){
        const exist = await this.prisma.player.findFirst({
            where: {
                id
            }
        })

        if(!exist){
            throw new Error(`Não encontrado`)
        }

        const attObject = await this.prisma.player.update({
            where: {
                id
            }, data: {...data}
        })

        if(attObject.carga_atual >= attObject.carga && attObject.carga !== 0){
            await this.prisma.player.update({
                where: {
                    id
                }, data: {
                    exausto: true
                }
            })
        }else{
            await this.prisma.player.update({
                where: {
                    id
                }, data: {
                    exausto: false
                }
            })
        }

        if(attObject.name !== exist.name){
            await this.prisma.playerAcess.update({
                where: {
                    id: attObject.player_id
                }, data: {
                    name: attObject.name
                }
            })
        }


        if(attObject.sombra >= attObject.esperanca_atual && attObject.esperanca_atual !== 0 ){
            await this.prisma.player.update({
                where: {
                    id
                }, data: {
                    arrasado: true
                }
            })
        }else{
            await this.prisma.player.update({
                where: {
                    id
                }, data: {
                    arrasado: false
                }
            })
        }

        return
    }

    //Equipament
    async findEquipament(id: string){
        const equipament = await this.prisma.playerInventory.findMany({
            where: {
                player_id: id
            }
        })        

        if(!equipament){
            return `Equipamento não encontrado.`
        }

        return equipament
    }

    async updateEquipament(id: string, data: any){
        const exist = await this.prisma.playerInventory.findFirst({
            where: {
                id
            }
        })

        if(!exist){
            throw new Error(`Equipamento não encontrado.`)
        }

        await this.prisma.playerInventory.update({
            where: {
                id
            }, data: {...data}
        })
    }

    async createEquipament(id: string){
        await this.prisma.playerInventory.create({
            data: {
                player_id: id,
                equipamento_de_guerra: '',
                dano: 0,
                ferimento: 0,
                carga: 0,
                anotacao_equipamento: ''
            }
        })

        return
    }

    async deleteEquipament(id: string){
        const exist = await this.prisma.playerInventory.findUnique({
            where: {id}
        })

        if(!exist){
            return
        }

        await this.prisma.playerInventory.delete({
            where: {
                id
            }
        })

        return
    }

    //Comitiva

    async findComitiva(id: string){
        return await this.prisma.comitiva.findFirst({
            where:{
                player_id: id
            }
        })
    }

    async findAllComitiva(id: string){
        return await this.prisma.comitiva.findMany({
            where:{
                project_id: id
            }
        })
    }

    async updateComitiva(id: string, data: any){
        const exist = await this.prisma.comitiva.findFirst({
            where: {
                player_id: id
            }
        })

        if(!exist){
            throw new Error(`Comitiva não encontrado.`)
        }

        await this.prisma.comitiva.updateMany({
            where: {
                player_id: id
            }, data: {...data}
        })
    }
 

    //Player acess

    async findByEmailAndProjectId(email: string, projectId: string) {
        return this.prisma.playerAcess.findFirst({
            where: {
              email: email,
              project_id: projectId,
            }});
    }

}

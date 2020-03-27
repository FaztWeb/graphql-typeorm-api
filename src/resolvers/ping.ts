import {Query, Resolver} from 'type-graphql'

@Resolver()
export class PingResolver {
  @Query(() => String)
  ping() {
    return "Pong!"
  }
}
package com.teedjay

import jakarta.ws.rs.GET
import jakarta.ws.rs.Path
import jakarta.ws.rs.Produces
import jakarta.ws.rs.core.MediaType
import kotlinx.serialization.Serializable

@Path("/bff/users")
class UsersResource {

    @Serializable
    data class User(val name: String, val age: Int)

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    fun listAll() : List<User> {
        return listOf(User("Alice", 42), User("Bob", 33), User("Charlie", 25), User("David", 18))
    }

}

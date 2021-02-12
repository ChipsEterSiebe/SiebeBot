const database = require("../database.json")    
const mysql = require("mysql");

module.exports.run = async (client, message, args) => {

    var con = mysql.createConnection({

        host: database.host,
        user: database.user,
        password: database.password,
        database: database.database

    });

    con.connect(err => {

        if(err) throw err;

    });

    // !data @siebe hoi hoi

    var user = message.guild.member(message.mentions.users.first());
    var bijnaam = args.join(" ").slice(22);

    if(user && !bijnaam){



    }else if (user && bijnaam == "remove"){


    }else if (user && bijnaam){


        con.query(`SELECT * FROM data WHERE idUser = '${user.id}'`,(err, rows) => {

            if(err) throw err;
            
        if(rows.length < 1) {

            con.query(`INSERT INTO data (idUser,bijnaam) VALUES ("${user.id}","${bijnaam}")`);

        } else {

            con.query(`UPDATE data SET bijnaam = '${bijnaam}' WHERE idUser = '${user.id}'`);

        }

        });

    } else {

        con.query(`SELECT * FROM data`, (err, rows)=>{

            if(err) throw err;

            if(rows.length > 0){

                for(var i = 0; i < rows.length; i++){

                    var id = rows[i].idUser;
                    message.channel.send(message.guild.members.cache.get(id).users.username + ": bijnaam, " + rows[i].bijnaam);
                
                }

            } else {

                 message.channel.send("Geen gegevens")


            }

        })
        
    }
     
}

module.exports.help = {
    name: "data"
}
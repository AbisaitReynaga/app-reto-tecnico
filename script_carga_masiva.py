import requests
import json
import psycopg2
from psycopg2 import sql

# URL de la API
API_URL = "http://apiiieg.jalisco.gob.mx/api/etup"

# Conexion de la base datos
def conectar_db():
    try:
        connection = psycopg2.connect(
            host='localhost',       
            port='5432',             
            user='abisait',      
            password='abisait123',
            database='appretotenicodb'
        )
        return connection
    except Exception as e:
        print(f"Error al conectar a la base de datos: {e}")
        return None

# Insersion masiva de datos a la tabla tranporte_publico
def insertar_datos(data):
    connection = conectar_db()
    if connection is not None:
        try:
            cursor = connection.cursor()

            # Consulta SQL para insertar datos
            insert_query = sql.SQL("""
                INSERT INTO transporte_publico (anio, mes, transporte, variable,id_entidad_unico, id_entidad,entidad, id_municipio_unico, id_municipio,municipio,valor,estatus)
                VALUES (%s, %s, %s, %s, %s, %s, %s,%s, %s, %s, %s, %s);
            """)
            

            for i, registro in enumerate(data.get('data', [])):                
                # Se realiza esta asignacion por que los registros con un pago con cortesion, no incluyen el key:value de valor.
                valor = registro.get('Valor') if registro.get('Valor') is not None else 0
                
                values = (
                    registro.get('Anio'),
                    registro.get('ID_mes'),
                    registro.get('Transporte'),
                    registro.get('Variable'),
                    registro.get('ID_entidad_unico'),
                    registro.get('ID_entidad'),
                    registro.get('Entidad'),
                    registro.get('ID_municipio_unico'),
                    registro.get('ID_Municipio'),
                    registro.get('Municipio'),
                    valor,
                    registro.get('Estatus')
                )
                cursor.execute(insert_query, values)
            
            connection.commit()
            print("Registros insertados exitosamente")
        
        except Exception as e:
            print(f"Error al insertar datos: {e}")
        finally:
            cursor.close()
            connection.close()

response = requests.get(API_URL)

if response.status_code == 200:
    data = response.json()
    insertar_datos(data)
else:
    print('Error al realizar la solicitud: ', response.status_code)

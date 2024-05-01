"use server";
import faker from 'faker';
import { db } from '@/lib/db';

export const fakeDataGenerator = async (cant) => {
  try {
    console.log(cant);
    for (let i = 0; i < cant; i++) {
      await db.post.create({
        data: {
          title: faker.company.companyName(),
          img: faker.image.imageUrl(),
          modelo: faker.vehicle.model(),
          marina: faker.address.streetName(),

        },
      });
    }
    console.log(`Se generaron ${cant} publicaciones falsas.`);
  } catch (error) {
    console.error('Error al generar datos falsos:', error);
  } 
};
// Genera 10 publicaciones falsas
const products = [
    {
        id: 1,
        name: "Model Kit Fruity Robo - Pineapple Slasher",
        price: 446.000,
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lzlo4zc6ps997e.webp",
        description: 
        "The Pineapple Slasher model kit comes from the Fruity Robo series. It can transform into the left arm of the Fusion Robot.",
    },
    {
        id: 2,
        name: "Model Kit Fruity Robo - Markman Apple",
        price: 446.000,
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m29ssufce08kb2.webp",
        description: 
        "The Markman Apple model kit comes from the Fruity Robo series. It can transform into the right arm of the Fusion Robot.",
    },
    {
        id: 3,
        name: "Model Kit Fruity Robo - Mandarine Berserker",
        price: 446.000,
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m5bpvk9k7zsz42.webp",
        description: 
        "The Mandarine Berserker model kit comes from the Fruity Robo series. It can transform into the head of the fusion robot.",
    },
    {
        id: 4,
        name: "Model Kit Fruity Robo - Berry Hunter",
        price: 446.000,
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-mb6xfnucs62b52.webp",
        description: 
        "The Berry Hunter model kit comes from the Fruity Robo series. It can transform into the wings of the Fusion Robot.",
    },
    {
        id: 5,
        name: "Model Kit Fruity Robo - Peach Surfer",
        price: 450.000,
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-820l4-me7fu48dqm808d.webp",
        description: 
        "The Peach Surfer model kit comes from the Fruity Robo series. It can transform into the left leg of the Fusion Robot.",
    },
    {
        id: 6,
        name: "Model Kit Fruity Robo - Turbo Grape",
        price: 450.000,
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mefveentq8sn2c.webp",
        description: 
        "The Turbo Grape model kit comes from the Fruity Robo series. It can transform into the right leg of the Fusion Robot.",
    },
    {
        id: 7,
        name: "Model Kit Fruity Robo - Pino Flight",
        price: 446.000,
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mjzekpifu7ewf7@resize_w900_nl.webp",
        description: 
        "The Pino Flight model kit comes from the Fruity Robo series. It can transform into the torso of the Fusion Robot.",
    },
    {
        id: 8,
        name: "Model Kit Fruity Robo - Melon Guardian",
        price: 496.000,
        image: "https://down-vn.img.susercontent.com/file/sg-11134253-8260t-mjisuozqv7ycb2@resize_w900_nl.webp",
        description: 
        "The Melon Guardian model kit comes from the Fruity Robo series. It can transform into the left arm the Fusion Robot.",
    },
    {
        id: 9,
        name: "Model Kit Fruity Robo - Banana Guardian",
        price: 496.000,
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mjh2mcptn66b71.webp",
        description: 
        "The Banana Guardian model kit comes from the Fruity Robo series. It can transform into the right arm the Fusion Robot.",
    },
    {
        id: 10,
        name: "Model Kit Fruity Robo - Cannon Bomber",
        price: 496.000,
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mf12n98nfl734c@resize_w900_nl.webp",
        description: 
        "The Cannon Bomber model kit comes from the Fruity Robo series. It can transform into the right leg the Fusion Robot.",
    },
    {
        id: 11,
        name: "Model Kit Fruity Robo - Demon Claw",
        price: 496.000,
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-820l4-me8i1spng6ir7f.webp",
        description: 
        "The Demon Claw model kit comes from the Fruity Robo series. It can transform into the left leg the Fusion Robot.",
    },
];

export function getProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((p) => p.id === Number(id));
}
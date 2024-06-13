const data = [
    {
      id: 1,
      img: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/ring-01-a.jpg",
      company: "Ring",
      price: "$1,500",
      description:
        "Nullam dapibus metus lacinia, vestibulum arcu vitae, fringilla elit. Maecenas pellentesque justo a bibendum eleifend. Nunc metus metus, bibendum at quam eget, congue fermentum diam. Cras rhoncus ex a neque dictum pellentesque. Cras et placerat est, et feugiat diam. Aliquam nec odio quis nibh fringilla euismod. ",
    },
    {
      id: 2,
      img: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/ring-02-c-400x500.jpg",
      company: "Ring",
      price: "$2,200",
      description:
        "Nullam dapibus metus lacinia, vestibulum arcu vitae, fringilla elit. Maecenas pellentesque justo a bibendum eleifend. Nunc metus metus, bibendum at quam eget, congue fermentum diam. Cras rhoncus ex a neque dictum pellentesque. Cras et placerat est, et feugiat diam. Aliquam nec odio quis nibh fringilla euismod. ",
    },
    {
      id: 3,
      img: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/ring-03-a.jpg",
      company: "Ring",
      price: "$900",
      description:
        "Nullam dapibus metus lacinia, vestibulum arcu vitae, fringilla elit. Maecenas pellentesque justo a bibendum eleifend. Nunc metus metus, bibendum at quam eget, congue fermentum diam. Cras rhoncus ex a neque dictum pellentesque. Cras et placerat est, et feugiat diam. Aliquam nec odio quis nibh fringilla euismod. ",
    },
    {
      id: 4,
      img: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/ring-05-c-400x500.jpg",
      company: "Ring",
      price: "$1,700",
      description:
        "Nullam dapibus metus lacinia, vestibulum arcu vitae, fringilla elit. Maecenas pellentesque justo a bibendum eleifend. Nunc metus metus, bibendum at quam eget, congue fermentum diam. Cras rhoncus ex a neque dictum pellentesque. Cras et placerat est, et feugiat diam. Aliquam nec odio quis nibh fringilla euismod. ",
    },
    {
      id: 5,
      img: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/ring-05-c-400x500.jpg",
      company: "Ring",
      price: "$750",
      description:
        "Nullam dapibus metus lacinia, vestibulum arcu vitae, fringilla elit. Maecenas pellentesque justo a bibendum eleifend. Nunc metus metus, bibendum at quam eget, congue fermentum diam. Cras rhoncus ex a neque dictum pellentesque. Cras et placerat est, et feugiat diam. Aliquam nec odio quis nibh fringilla euismod. ",
    },
    {
      id: 6,
      img: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/ring-04-c.jpg",
      company: "Ring",
      price: "$1,300",
      description:
        "Nullam dapibus metus lacinia, vestibulum arcu vitae, fringilla elit. Maecenas pellentesque justo a bibendum eleifend. Nunc metus metus, bibendum at quam eget, congue fermentum diam. Cras rhoncus ex a neque dictum pellentesque. Cras et placerat est, et feugiat diam. Aliquam nec odio quis nibh fringilla euismod. ",
    },
    {
      id: 7,
      company: "Braclets",
      img: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/bracelet-01-a.jpg",
      price: "$495",
      description:
        "Nullam dapibus metus lacinia, vestibulum arcu vitae, fringilla elit. Maecenas pellentesque justo a bibendum eleifend. Nunc metus metus, bibendum at quam eget, congue fermentum diam. Cras rhoncus ex a neque dictum pellentesque. Cras et placerat est, et feugiat diam. Aliquam nec odio quis nibh fringilla euismod. ",
    },
    {
      id: 8,
      img: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/bracelet-02-c-400x500.jpg",
      company: "Braclets",
      price: "$590",
      description:
        "Nullam dapibus metus lacinia, vestibulum arcu vitae, fringilla elit. Maecenas pellentesque justo a bibendum eleifend. Nunc metus metus, bibendum at quam eget, congue fermentum diam. Cras rhoncus ex a neque dictum pellentesque. Cras et placerat est, et feugiat diam. Aliquam nec odio quis nibh fringilla euismod.",
    },
    {
      id: 9,
      img: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/bracelet-03-a.jpg",
      company: "Braclets",
      price: "$990",
      description:
        "Nullam dapibus metus lacinia, vestibulum arcu vitae, fringilla elit. Maecenas pellentesque justo a bibendum eleifend. Nunc metus metus, bibendum at quam eget, congue fermentum diam. Cras rhoncus ex a neque dictum pellentesque. Cras et placerat est, et feugiat diam. Aliquam nec odio quis nibh fringilla euismod. ",
    },
    {
      id: 10,
      img: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/bracelet-04-c.jpg",
      company: "Braclets",
      price: "$500",
      description:
        "Nullam dapibus metus lacinia, vestibulum arcu vitae, fringilla elit. Maecenas pellentesque justo a bibendum eleifend. Nunc metus metus, bibendum at quam eget, congue fermentum diam. Cras rhoncus ex a neque dictum pellentesque. Cras et placerat est, et feugiat diam. Aliquam nec odio quis nibh fringilla euismod. ",
    },
    {
      id: 11,
      img: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/bracelet-05-a.jpg",
  
      company: "Braclets",
      price: "$350",
      description:
        "Nullam dapibus metus lacinia, vestibulum arcu vitae, fringilla elit. Maecenas pellentesque justo a bibendum eleifend. Nunc metus metus, bibendum at quam eget, congue fermentum diam. Cras rhoncus ex a neque dictum pellentesque. Cras et placerat est, et feugiat diam. Aliquam nec odio quis nibh fringilla euismod. ",
    },
    {
      id: 12,
      img: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/bracelet-06-a.jpg",
  
      company: "Braclets",
      price: "$750",
      description:
        "Nullam dapibus metus lacinia, vestibulum arcu vitae, fringilla elit. Maecenas pellentesque justo a bibendum eleifend. Nunc metus metus, bibendum at quam eget, congue fermentum diam. Cras rhoncus ex a neque dictum pellentesque. Cras et placerat est, et feugiat diam. Aliquam nec odio quis nibh fringilla euismod. ",
    },
    {
      id: 13,
      img: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/earrings-04-a.jpg",
  
      company: "Earings",
      price: "$1,700",
      description:
        "Nullam dapibus metus lacinia, vestibulum arcu vitae, fringilla elit. Maecenas pellentesque justo a bibendum eleifend. Nunc metus metus, bibendum at quam eget, congue fermentum diam. Cras rhoncus ex a neque dictum pellentesque. Cras et placerat est, et feugiat diam. Aliquam nec odio quis nibh fringilla euismod.",
    },
    {
      id: 14,
      img: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/earrings-05-a.jpg",
  
      company: "Earings",
      price: "$1,700",
      description:
        "Nullam dapibus metus lacinia, vestibulum arcu vitae, fringilla elit. Maecenas pellentesque justo a bibendum eleifend. Nunc metus metus, bibendum at quam eget, congue fermentum diam. Cras rhoncus ex a neque dictum pellentesque. Cras et placerat est, et feugiat diam. Aliquam nec odio quis nibh fringilla euismod. ",
    },
    {
      id: 15,
      img: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/earrings-06-b.jpg",
  
      company: "Earings",
      price: "$400",
      description:
        "Nullam dapibus metus lacinia, vestibulum arcu vitae, fringilla elit. Maecenas pellentesque justo a bibendum eleifend. Nunc metus metus, bibendum at quam eget, congue fermentum diam. Cras rhoncus ex a neque dictum pellentesque. Cras et placerat est, et feugiat diam. Aliquam nec odio quis nibh fringilla euismod. ",
    },
    {
      id: 16,
      img: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/earrings-01-c-400x500.jpg",
  
      company: "Earings",
      description:
        "Nullam dapibus metus lacinia, vestibulum arcu vitae, fringilla elit. Maecenas pellentesque justo a bibendum eleifend. Nunc metus metus, bibendum at quam eget, congue fermentum diam. Cras rhoncus ex a neque dictum pellentesque. Cras et placerat est, et feugiat diam. Aliquam nec odio quis nibh fringilla euismod. ",
  
      price: "$500",
    },
    {
      id: 17,
      img: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/earrings-02-a.jpg",
      company: "Earings",
      price: "$390",
      description:
        "Nullam dapibus metus lacinia, vestibulum arcu vitae, fringilla elit. Maecenas pellentesque justo a bibendum eleifend. Nunc metus metus, bibendum at quam eget, congue fermentum diam. Cras rhoncus ex a neque dictum pellentesque. Cras et placerat est, et feugiat diam. Aliquam nec odio quis nibh fringilla euismod. ",
    },
    {
      id: 18,
      img: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/earrings-03-a.jpg",
  
      company: "Earings",
      price: "$350",
      description:
        "Nullam dapibus metus lacinia, vestibulum arcu vitae, fringilla elit. Maecenas pellentesque justo a bibendum eleifend. Nunc metus metus, bibendum at quam eget, congue fermentum diam. Cras rhoncus ex a neque dictum pellentesque. Cras et placerat est, et feugiat diam. Aliquam nec odio quis nibh fringilla euismod. ",
    },
  
    {
      id: 19,
      img: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/necklace-01-a.jpg",
      company: "Necklaces",
      price: "$550",
      description:
        "Nullam dapibus metus lacinia, vestibulum arcu vitae, fringilla elit. Maecenas pellentesque justo a bibendum eleifend. Nunc metus metus, bibendum at quam eget, congue fermentum diam. Cras rhoncus ex a neque dictum pellentesque. Cras et placerat est, et feugiat diam. Aliquam nec odio quis nibh fringilla euismod. ",
    },
    {
      id: 20,
      img: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/necklace-02-a.jpg",
  
      company: "Necklaces",
      price: "$550",
      description:
        "Nullam dapibus metus lacinia, vestibulum arcu vitae, fringilla elit. Maecenas pellentesque justo a bibendum eleifend. Nunc metus metus, bibendum at quam eget, congue fermentum diam. Cras rhoncus ex a neque dictum pellentesque. Cras et placerat est, et feugiat diam. Aliquam nec odio quis nibh fringilla euismod. ",
    },
  
    {
      id: 21,
      img: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/necklace-03-a.jpg",
      company: "Necklaces",
      price: "$550",
      description:
        "Nullam dapibus metus lacinia, vestibulum arcu vitae, fringilla elit. Maecenas pellentesque justo a bibendum eleifend. Nunc metus metus, bibendum at quam eget, congue fermentum diam. Cras rhoncus ex a neque dictum pellentesque. Cras et placerat est, et feugiat diam. Aliquam nec odio quis nibh fringilla euismod. ",
    },
  
    {
      id: 22,
      img: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/necklace-04-a.jpg",
      company: "Necklaces",
      price: "$550",
      description:
        "Nullam dapibus metus lacinia, vestibulum arcu vitae, fringilla elit. Maecenas pellentesque justo a bibendum eleifend. Nunc metus metus, bibendum at quam eget, congue fermentum diam. Cras rhoncus ex a neque dictum pellentesque. Cras et placerat est, et feugiat diam. Aliquam nec odio quis nibh fringilla euismod. ",
    },
  
    {
      id: 23,
      img: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/necklace-05-a.jpg",
      company: "Necklaces",
      price: "$550",
      description:
        "Nullam dapibus metus lacinia, vestibulum arcu vitae, fringilla elit. Maecenas pellentesque justo a bibendum eleifend. Nunc metus metus, bibendum at quam eget, congue fermentum diam. Cras rhoncus ex a neque dictum pellentesque. Cras et placerat est, et feugiat diam. Aliquam nec odio quis nibh fringilla euismod. ",
    },
  
    {
      id: 24,
      img: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/necklace-06-b-400x500.jpg",
      company: "Necklaces",
      price: "$550",
      description:
        "Nullam dapibus metus lacinia, vestibulum arcu vitae, fringilla elit. Maecenas pellentesque justo a bibendum eleifend. Nunc metus metus, bibendum at quam eget, congue fermentum diam. Cras rhoncus ex a neque dictum pellentesque. Cras et placerat est, et feugiat diam. Aliquam nec odio quis nibh fringilla euismod. ",
    },
  ];
  
  export default data;
  
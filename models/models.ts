export interface IImage {
  data: {
    attributes: {
      url: string;
    };
  };
}
export interface IHomePage {
  title: string;
}
export interface IPost {
  attributes: {
    title: string;
    content: any;
    shortDescription: string;
    image: IImage;
    slug: string;
  };
}

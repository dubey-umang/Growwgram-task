export type FeedData = { 
  likes: number;
  description: string;
  user: User;
  urls: UserPost;
  height: number;
  width: number;
}

export type User = {
  name: string;
  portfolio_url: string;
  username: string;
  profile_image: {
    small: string;
    large: string;
  };
  followers_count: number;
  following_count: number;
  total_photos: number;
}

export type UserPost = {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

export type RootState = {
  feedPage: {
    isLoading: boolean;
    hasError: boolean;
    data: FeedData[];
    hasMore: boolean;
    pageNo: number;
  }
  profilePage: {
    userData: {
      isLoading: boolean;
      hasError: boolean;
      data: User;
    },
    userPhotos: {
      isLoading: boolean;
      hasError: boolean;
      data: FeedData[];
      hasMore: boolean;
    }
  }
}

export type CachingParams = {
  time?: number;
  key: string;
}



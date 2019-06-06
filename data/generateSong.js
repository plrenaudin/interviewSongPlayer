// This is just a helper for generating dummy data, expect no clean code.

const rand = limit => Math.floor(Math.random() * limit + 1);

const generateWord = seed => {
  const list = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sem dolor, fermentum nec sapien eget, tempor faucibus dui. Sed vitae molestie ipsum, eu egestas mauris. Suspendisse id ullamcorper libero. Mauris augue dui, porttitor in ante in, feugiat bibendum orci. Praesent non dapibus dui. Pellentesque fringilla hendrerit malesuada. Suspendisse sem felis, dictum vitae hendrerit ut, condimentum quis libero. Phasellus commodo tellus tristique diam volutpat vulputate. Morbi quis ultricies felis. Nulla vel sodales tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Sed tempor risus at magna accumsan pretium. Ut et nisi sapien. Aliquam id eros viverra, condimentum turpis et, ultricies ex. Curabitur est odio, maximus vitae tellus ut, luctus porta neque. Phasellus eu lectus aliquam, sollicitudin nunc sit amet, pretium lacus. Praesent porta ipsum sodales sem aliquam, in vestibulum eros sagittis. Sed lorem libero, consequat ullamcorper velit nec, accumsan elementum urna. Cras sit amet mattis quam, vel rutrum leo.`
    .split(" ")
    .map(i => i.replace(/[^a-zA-Z]/g, ""));
  return list[seed % list.length]
}

const generateAuthors = seed => {
  const list = ["john", "bob", "marie", "suzan", "paul", "joe", "helen"];
  return list[seed % list.length];
};

const generateSong = (id) => ({
  id,
  title: generateWord(rand(500)),
  author: [...new Set([...new Array(rand(3))].map(i => generateAuthors(rand(15))))]
});


export const generateSongList = size => {
  return [...new Array(size)].map((_,index) => generateSong(index));
};


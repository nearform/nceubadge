/*
  This code will add the Unicorn and the #tamingunicorns hashtag
  to your conference badge.
  This will not overwrite your name!
  If you are not happy with your badge upgrade, remove the badge battery.
  This resets the badge.

  for the workshop - this is the link you are looking for http://bit.ly/2yCS3uQ

  Believe in unicorns! 
*/

var hashtag = {
  width : 128, height : 60, bpp : 1,
  transparent : 0,
  buffer : E.toArrayBuffer(atob("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAGAAAAAAAAAAAAAAAAAAAAAwGAAAAAAAAAAAAAAAAAAAOD3AAAAAAAAAAAAAAAAAABz/wAAAAAAAAAAAAAAAAAgPB+AAAAAAAAAAAAAAAAAwPQ/gAAAAAAAAAAAAAAAAMH4f+AAAAAAAAAAAAAAAAHP8f/wAAAgAAAAAAAAAAAA/+P/OAAAYAAAAAAAAAAAAP+D/jgAAOAAAAAAAAAAAAB/B/48AADgAAAAAAAAAAAAIAffDAAA4AAAAAAAAAAAAAAP/y4AAPAAAAAAAAAAAAAAHj8OAADwAAAAAAAAAAAAAH9/DgAA+AAAAAAAAAAAAAB9/48AAegAAAAAAAAAAAAA//+PEAHoAAAAAAAAAAAAAf//j/AD6AAAAAAAAAAAAAP//4fwA/AAAAAAAAAAAAAP///H8AfkAAAAAAAAAAAAH///x+AH8AAAAAAAAAAAAD///+IAD/AAAAAAAAAAAAA////gAA/gAAAAAAAAAAAAb///8AAP8AAAAAAAAAAAAH////gAD+AAAAAAAAAAAAB////8P//gAAAAAAAAAAAAf///////wAAAAAAAAAAAAD///////8AAAAAAAAAAAAA////////AAAAAAAAAAAAAH//H////4AAAAAAAAAAAAA//A////+AAAAAAAAAAAAAH/AP////gAAAAAAAAAAAAA/AB////4AAAAAAAAAAAAAAAAf///+AAAAAAAAAAAAAAAAf////gAAAAAAAAAAAAAAAN////4AAAAAAAAAAAAAAAPv///8AAAAAAAAAAAAAAAf7////AAAAAAAAAAAAAAAf/////4AAAAAAAAAAAAAA//f////gAAAAAAAAAAAAAH/38AH/8AAAAAAAAAAAAAA///AAD/wAAAAAAAAAAAAAH8/wAPf+AAAAAAAAAAAAAA+f4AB7/4AAAAAAAAAAAAADP+AAff4AAAAAAAAAAAAAAD/gAD/8AAAAAAAAAAAAAAB/wAAf8AAAAAAAAAAAAAAAP8AAHwAAAAAAAAAAAAAAAB+AAAAAAAAAAAAAAAAAAAAHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"))
};

var uniCorn = {
  width : 128, height : 64, bpp : 1,
  transparent : 0,
  buffer : E.toArrayBuffer(atob("//////////////////////////////////////////////////////////////////////////////////////////////////////////////////4P//////////////////4AB////9////////////+AD+f///+P///////////+Az/n////j////////////n8/5////w///////////35/P+f///+/z////////98+fz/nn4f//4h/7//////PPn8//w+AJ8cAP+f/////zwZ/P/5n8AMH4z8n/////8ADfz//5/GLH+c8B/////+AP/8///fxmZ/nPOf/////B7//P/8D8/mf5znn/////++//z/+A/P7n+c55//////nn/8//mPz85/nOef/////55//f/zj8/OfzwnH/////+AD/3/84/Pnn84MB/////8AD/9//ADxh58Ofif/////B5//f/4YwQefh//n/////+ef/3///8/jn/f/5//////n3/9//////4H//+f/////////f/////8B//nP/////////wP/////P//8H/////////wB/////////j/////////wf///////////////////8////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9////////////////////+P///////////////B/n//j///////////////wHh//w////////////////Ih8/+//////z//3//////zweIf/+P//54h/B//////8/nAD8fBf/MMAPgf/////+f9+M8HjHDgZ4zzn//////n/PnPH5zgYOec87//////5/z5z5854Ez3nPAf/////+f8+c+fP888/5z4n//////n/PnPnz/PPP+c/8//////5/z5z589zzz/nPnP/////+f888OfPM58/zwxn//////z/PODnzzkfP84IB//////8/zDn5+YYPz8OeR///////H84f+fwP/8/h/n///////48f3/n+P/8B/f/////////AP//4H///Af//////////8H//8B////////////////////P////////////////////////////////////////////////////////////////////////////w=="))
};

Badge.badgeImages.push(hashtag);
Badge.badgeImages.push(uniCorn);


// This bit will allow you to NFC directly to the hashtag with your Android phone
// Our collective dream is to have a mildly trending hastag.
// Please help us make it a reality.

Badge.URL="https://twitter.com/hashtag/TamingUnicorns?src=hash";

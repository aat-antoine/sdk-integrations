#pragma strict

//This is in the Loader scene and will bring us to the menu right away. 
//This is so we can carry the music manager through the entire game.

function Start () {
Application.LoadLevel("menu");

#if UNITY_ANDROID
    // Initializing WPresage
    WPresage.Initialize();

#endif

}

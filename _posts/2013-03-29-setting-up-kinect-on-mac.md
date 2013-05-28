---
layout: post
category: kinect
tags:
    - gesture control
    - physical computing
    - processing
title: "Setting up Kinect on Mac"
---

**Update 27/04/2013**: Latest test of the OpenNI 2.1.0 beta and NITE2 was good but it's not working with the SimpleOpenNI library yet. I'll keep watching for updates and let you know when it's all running.

Thanks to open source projects like [OpenNI](http://www.openni.org/) and [OpenKinect](http://openkinect.org/wiki/Main_Page), you can now use Microsoft's Kinect on more than just Windows. This guide is for those running OSX 10.6.8 or newer but might also be applicable to anyone still running older versions or Linux. Some changes to the command line code might be needed though – if you get it going, let me know in the comments.

The main parts involved here are OpenNI, SensorKinect, NITE. We'll also be using Processing and a helper library to interface with the Kinect. You don't need to know any Processing yet as there are demos to help us make sure everything is running alright.

## Which Kinect?

The hardware and interface differences mean that, for this guide and my experience at least, you will need an Xbox Kinect. In addition you will need a power adapter as there's not enough coming out of the MacbookPro port to power it.

## Before we begin

There are some things you'll need to install before we can start with the Kinect utilities.

First up is [Xcode](https://developer.apple.com/xcode/). The latest version is available from the link and you'll also need to install the Command Line Tools once it's been set up. This is done from the “Downloads” panel in Xcode's preferences. Snow Leopard users can't have the latest version so you'll need to [grab 3.2.6 from here](https://developer.apple.com/downloads/index.action) and search for "snow leopard" in the left column.

Secondly you'll need to get [MacPorts](http://www.macports.org/). I grabbed the .pkg file as it's the easiest way to get it on your system.

It's worth restarting at the point (if MacPorts doesn't get you to do it anyway) just to make sure any dependencies that are loaded at startup are there.

**Note**: There is some command line in here and some sudo. Be careful using sudo as it grants temporary root level access which can break stuff. Lots of stuff. You have been warned!

## The dependencies

Our first step is to get the libraries needed to make sure our USB port can understand the Kinect. Open up Terminal (*Applications -> Utilities -> Terminal*) and type the following:

{% highlight bash %}
sudo port install libtool
{% endhighlight %}

Once that's done, restart you computer. It's annoying but necessary.

Next up is the libusb library, which is installed with:

{% highlight bash %}
sudo port install libusb-devel +universal
{% endhighlight %}

**Note**: You might get an error along the lines of *“Error: Please do not install this port since it has been replaced by 'libusb'.”* when doing this. If you do run the following 3 commands and it should install the library:

{% highlight bash %}
sudo rm -f /opt/local/lib/libusb-1.0.0.dylib
sudo port clean libusb
sudo port install libusb +universal
{% endhighlight %}

Now you'll need to **restart your computer** again.

## The Kinect

I can't stress enough how important the order of installation is here. I got it wrong a couple of times trying and had to uninstall *everything* and start again. Please learn from my mistakes and save yourself some hassle. To be absolutely clear, the order is:

1. OpenNI
2. SensorKinect
3. NITE

First, to keep things organised, create a folder named *"Kinect"* to keep the applications we're about to install. I put mine in my *"Sites"* directory, you may want choose a different home.

## Install OpenNI

Download the [OpenNI SDK v1.5.4.0](http://www.openni.org/openni-sdk/openni-sdk-history-2/#.UU8mq1vG_wM), copy it to your *"Kinect"* folder and unzip. Once it's done, cd into the new folder and run the following command:

{% highlight bash %}
sudo ./install.sh
{% endhighlight %}

## Install SensorKinect

Download the [SensorKinect zip from GitHub](https://github.com/avin2/SensorKinect/tree/unstable/Bin), copy it to your *"Kinect"* folder and unzip. Once it's done, cd into the new folder and run the following command:

{% highlight bash %}
sudo ./install.sh
{% endhighlight %}

## Install NITE

Finally, download [NITE v1.5.2.21](http://www.openni.org/openni-sdk/openni-sdk-history-2/#.UU8mq1vG_wM), copy to your *"Kinect"* folder and unzip. Once it's done, cd into the new folder and run the following command:

{% highlight bash %}
sudo ./install.sh
{% endhighlight %}

## Almost done!

Now all the middleware items are installed, it's almost time to fire up the Kinect. The last thing we need to do is install Processing and the OpenKinect library.

Grab and install a copy of Processing from the [official website](http://processing.org/download/). It'll automatically add a folder named Processing in your Documents, which is where all your sketches will live. If you want to change this, you can do it through the preferences. Finally, download the [OpenKinect library](http://www.shiffman.net/p5/libraries/openkinect/openkinect.zip) and unzip it in your *Processing -> libraries* folder.

## Fire it up

Finally it's time to hook up your power adapter and plug in the Kinect – any free USB port on your machine will work just fine. I've not tried it using an extender so it may work alright – let me know in the comments. In your freshly unzipped *"openkinect"* folder go to *examples -> RGBDepthTest* and open up the *"RGBDepthTest.pde"*. This demo lets you display the images from the cameras on the unit and adjust the viewing angle.

That's it! You should now have your Kinect hooked up and working. If you have had any issues or improvements drop them in the comments and I'll do my best to answer.
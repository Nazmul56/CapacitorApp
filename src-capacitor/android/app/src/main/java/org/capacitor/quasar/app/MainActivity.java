package org.capacitor.quasar.app;

import android.os.Bundle;

import com.epicshaggy.biometric.NativeBiometric;
import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;

import java.util.ArrayList;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    registerPlugin(NativeBiometric.class);
    // Initializes the Bridge
/*    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);
      add(NativeBiometric.class);
    }});*/
  }
}

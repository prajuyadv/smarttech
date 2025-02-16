//
//  demoApp.swift
//  demo
//
//  Created by Praju kumar yadav Patnam  on 1/31/25.
//

import SwiftUI

@main
struct demoApp: App {
    let persistenceController = PersistenceController.shared

    var body: some Scene {
        WindowGroup {
            ContentView()
                .environment(\.managedObjectContext, persistenceController.container.viewContext)
        }
    }
}

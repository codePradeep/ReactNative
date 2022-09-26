//
//  RCTCalendarModule.m
//  MyIosApp
//
//  Created by Pradeep Sharma on 26/09/22.
//

#import <Foundation/Foundation.h>

#import "RCTCalendarModule.h"
#import <React/RCTLog.h>

@implementation RCTCalendarModule : NSObject
RCT_EXPORT_MODULE();
- (NSString *)hello{
NSLog( @"Hello world !");
return @"Hello world !";
}
RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(getName)
{
return [[UIDevice currentDevice] name];
}


RCT_EXPORT_METHOD(createCalendarEvent:(NSString *)name location:(NSString *)location)
{
 RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
  
}
@end
